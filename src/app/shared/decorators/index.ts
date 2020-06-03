/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 14:23:46
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-03 14:51:44
 * @Description:注解
 */

export function Emoji() {
  return (target: object, key: string) => {
    let value = target[key];

    const getter = () => {
      return value;
    };

    const setter = (val: string) => {
      value = `👿 ${val} 👿`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true,
    });
  };
}

export function Confirmable(message: string) {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    //原始函数
    const original: Function = descriptor.value;

    descriptor.value = (...args: any) => {
      const allow = window.confirm(message);
      if (allow) {
        const result = original.apply(this, args);
        return result;
      }

      return null;
    };

    return descriptor;
  };
}
