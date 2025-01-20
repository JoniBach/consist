export declare function inArray<T>(value: T, array: T[]): boolean;
export declare function notInArray<T>(value: T, array: T[]): boolean;
export declare function empty(array: any[]): boolean;
export declare function notEmpty(array: any[]): boolean;
export declare function allMatch<T>(array: T[], condition: (value: T) => boolean): boolean;
export declare function anyMatch<T>(array: T[], condition: (value: T) => boolean): boolean;
export declare function noneMatch<T>(array: T[], condition: (value: T) => boolean): boolean;
