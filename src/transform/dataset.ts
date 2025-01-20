// Type definitions for clarity
export type GenericDataPoint = { [key: string]: any };
export type ValidationResult = { isValid: boolean; reason?: string };
export type TransformConfig = {
    validate: (data: GenericDataPoint[]) => ValidationResult;
    map: (data: GenericDataPoint) => GenericDataPoint;
    aggregate?: (data: GenericDataPoint[]) => GenericDataPoint[];
};

// 1. Validation Function
export const validateData = (data: GenericDataPoint[], validateFn: (data: GenericDataPoint[]) => ValidationResult): ValidationResult =>
    validateFn(data);

// 2. Mapping Function
export const mapData = (data: GenericDataPoint[], mapFn: (data: GenericDataPoint) => GenericDataPoint): GenericDataPoint[] =>
    data.map(mapFn);

// 3. Aggregation Function (optional)
export const aggregateData = (data: GenericDataPoint[], aggregateFn?: (data: GenericDataPoint[]) => GenericDataPoint[]): GenericDataPoint[] =>
    aggregateFn ? aggregateFn(data) : data;

// 4. Transformation Coordinator
export const transformData = (data: GenericDataPoint[], config: TransformConfig): GenericDataPoint[] | Error => {
    const validation = validateData(data, config.validate);
    if (!validation.isValid) {
        return new Error(validation.reason || "Validation failed");
    }

    let transformedData = mapData(data, config.map);
    transformedData = aggregateData(transformedData, config.aggregate);

    return transformedData;
};

// // Example Configuration and Usage
// const exampleConfig: TransformConfig = {
//     validate: (data) => ({ isValid: data.length > 0 }),
//     map: (data) => ({ ...data, computedField: data.someField * 2 }), // Example mapping logic
//     // No aggregation in this example
// };

// const exampleData: GenericDataPoint[] = [{ someField: 10 }, { someField: 20 }];
// const result = transformData(exampleData, exampleConfig);


// 5. Helper function to split data into manageable chunks
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}


// 6. Transformation function for large datasets
export async function transformDataset(data: GenericDataPoint[], config: TransformConfig, chunkSize: number = 1000): Promise<GenericDataPoint[] | Error> {
    const chunks = chunkArray(data, chunkSize);
    const transformedChunks: GenericDataPoint[][] = [];

    for (const chunk of chunks) {
        const result = transformData(chunk, config);
        if (result instanceof Error) {
            return result; // Early return on error
        }
        transformedChunks.push(result);
    }

    // Flatten the chunks back into a single array
    const flattenedResult = transformedChunks.flat();
    return flattenedResult;
}
