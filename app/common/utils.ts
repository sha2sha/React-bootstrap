
export interface IKeyValuePair {
    key: any;
    value?: any;
}

export class KeyValuePair {
    key: any;
    value: any;

    constructor(key: any, value: any) {
        this.key = key;
        this.value = value;
    }
}

export function isPromise(object: any) {
    if (object && (object['then'] instanceof Function || object['promiseDispatch'] instanceof Function))
        return true;
    return false;
}

export class Utils {

    public static checkNested(obj, args: Array<string>): boolean {
        for (var i = 0; i < args.length; i++) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return false;
            }
            obj = obj[args[i]];
        }
        return true;
    }

    public static getTask(scope: any, fn: any, args?: Array<any>) {
        var func = function (closureFnArgs: Array<any>) {
            return fn.apply(scope, args);
        }
        return func;
    }
}
