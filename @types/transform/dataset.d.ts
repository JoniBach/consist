export type GenericDataPoint = {
    [key: string]: any;
};
export type ValidationResult = {
    isValid: boolean;
    reason?: string;
};
export type TransformConfig = {
    validate: (data: GenericDataPoint[]) => ValidationResult;
    map: (data: GenericDataPoint) => GenericDataPoint;
    aggregate?: (data: GenericDataPoint[]) => GenericDataPoint[];
};
export declare const validateData: (data: GenericDataPoint[], validateFn: (data: GenericDataPoint[]) => ValidationResult) => ValidationResult;
export declare const mapData: (data: GenericDataPoint[], mapFn: (data: GenericDataPoint) => GenericDataPoint) => GenericDataPoint[];
export declare const aggregateData: (data: GenericDataPoint[], aggregateFn?: ((data: GenericDataPoint[]) => GenericDataPoint[]) | undefined) => GenericDataPoint[];
export declare const transformData: (data: GenericDataPoint[], config: TransformConfig) => GenericDataPoint[] | Error;
export declare function chunkArray<T>(array: T[], chunkSize: number): T[][];
export declare function transformDataset(data: GenericDataPoint[], config: TransformConfig, chunkSize?: number): Promise<GenericDataPoint[] | Error>;
