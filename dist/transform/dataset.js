"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataset = exports.chunkArray = exports.transformData = exports.aggregateData = exports.mapData = exports.validateData = void 0;
// 1. Validation Function
const validateData = (data, validateFn) => validateFn(data);
exports.validateData = validateData;
// 2. Mapping Function
const mapData = (data, mapFn) => data.map(mapFn);
exports.mapData = mapData;
// 3. Aggregation Function (optional)
const aggregateData = (data, aggregateFn) => aggregateFn ? aggregateFn(data) : data;
exports.aggregateData = aggregateData;
// 4. Transformation Coordinator
const transformData = (data, config) => {
    const validation = (0, exports.validateData)(data, config.validate);
    if (!validation.isValid) {
        return new Error(validation.reason || "Validation failed");
    }
    let transformedData = (0, exports.mapData)(data, config.map);
    transformedData = (0, exports.aggregateData)(transformedData, config.aggregate);
    return transformedData;
};
exports.transformData = transformData;
// // Example Configuration and Usage
// const exampleConfig: TransformConfig = {
//     validate: (data) => ({ isValid: data.length > 0 }),
//     map: (data) => ({ ...data, computedField: data.someField * 2 }), // Example mapping logic
//     // No aggregation in this example
// };
// const exampleData: GenericDataPoint[] = [{ someField: 10 }, { someField: 20 }];
// const result = transformData(exampleData, exampleConfig);
// 5. Helper function to split data into manageable chunks
function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
exports.chunkArray = chunkArray;
// 6. Transformation function for large datasets
async function transformDataset(data, config, chunkSize = 1000) {
    const chunks = chunkArray(data, chunkSize);
    const transformedChunks = [];
    for (const chunk of chunks) {
        const result = (0, exports.transformData)(chunk, config);
        if (result instanceof Error) {
            return result; // Early return on error
        }
        transformedChunks.push(result);
    }
    // Flatten the chunks back into a single array
    const flattenedResult = transformedChunks.flat();
    return flattenedResult;
}
exports.transformDataset = transformDataset;
