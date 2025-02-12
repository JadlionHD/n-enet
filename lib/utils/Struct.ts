import { ENetUint, ENetUint8, ENetUint16, ENetUint32 } from "../defs";
import { ExtendBuffer } from "./ExtendBuffer";

export abstract class Struct {
  [key: string]: unknown;
  #_keys: string[];

  constructor() {
    this.#_keys = [];
  }

  protected init(): void {
    this.#_keys = Object.keys(this);
  }

  public get size(): number {
    let size = 0;

    for (const k of this.#_keys) {
      const p = this[k];
      const propSize = (p as { size: number })?.size;

      size += propSize;
    }
    return size;
  }

  public get chunkData(): ExtendBuffer {
    const buf = new ExtendBuffer(this.size);

    for (const k of this.#_keys) {
      const p = this[k];

      // @ts-expect-error
      const chunkData = p?.chunkData as ExtendBuffer | undefined;

      if (chunkData) for (const d of chunkData.data) buf.writeU8(d);
      if (p instanceof ENetUint) buf.writeU(p.size, p.value);
    }
    return buf;
  }
}
