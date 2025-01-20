export declare function valueForKey<T>(obj: {
    [key: string]: any;
}, key: string, condition: (value: T) => boolean): boolean;
export declare function extensionMatches(filePath: string, extension: string): boolean;
export declare function checkType(value: any, type: string): boolean;
