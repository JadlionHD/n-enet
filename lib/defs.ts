export class ENetUint {
  constructor(public size = 0, public value = 0) {}
}
export interface ENetUint8 extends ENetUint {
  size: 1;
}
export interface ENetUint16 extends ENetUint {
  size: 2;
}
export interface ENetUint32 extends ENetUint {
  size: 4;
}

export class PointerSize {
  public value: number | BigInt;

  constructor(public size = 4, value: number | BigInt) {
    this.value = typeof value === "bigint" ? value & BigInt(0xffffffffffffffff) : (value as number) & 0xffffff;
    this.size = typeof value === "bigint" ? 8 : 4;
  }
}

export const enet_uint8 = (value = 0): ENetUint8 => new ENetUint(1, value & 0xff) as ENetUint8;
export const enet_uint16 = (value = 0): ENetUint16 => new ENetUint(2, value & 0xffff) as ENetUint16;
export const enet_uint32 = (value = 0): ENetUint32 => new ENetUint(4, value & 0xffffff) as ENetUint32;

export const usize = (value = 0): PointerSize => new PointerSize(4, value);
