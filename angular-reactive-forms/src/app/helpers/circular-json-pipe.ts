

import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({ name: 'circularObjectToJsonPipe' })
    export class CircularObjectToJsonPipe implements PipeTransform {
        transform(circularObj: any): any {

            const getCircularReplacer = () => {
                const seen = new WeakSet();
                return (key, value) => {
                    if (typeof value === "object" && value !== null) {
                        if (seen.has(value)) {
                            return;
                        }
                        seen.add(value);
                    }
                    return value;
                };
            };

            return JSON.stringify(circularObj, getCircularReplacer());
        }
    }
