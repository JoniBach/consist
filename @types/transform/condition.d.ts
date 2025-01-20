export type ConditionParams = [any, string, any?, boolean?];
export declare class UnsupportedOperationException extends Error {
}
export declare class OperationExecutionException extends Error {
    operationName: string;
    operands: any[];
    constructor(operationName: string, operands: any[], message?: string);
}
export declare const checkCondition: (params: [any, string, any?]) => boolean;
export declare const checkConditions: (conditions: ConditionParams[]) => boolean;
export declare const checkObjectCondition: (obj: Record<string, any>, params: [string, string, any?]) => boolean;
export declare const checkObjectConditions: (obj: Record<string, any>, conditions: [string, string, any?][]) => boolean;
export declare function filterByObjectCondition(objects: Record<string, any>[], condition: [string, string, any?]): Record<string, any>[];
export declare function filterByObjectConditions(objects: Record<string, any>[], conditions: [string, string, any?][]): Record<string, any>[];
