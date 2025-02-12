import { enet_uint8, enet_uint16, enet_uint32, type ENetUint8, type ENetUint16, type ENetUint32 } from "../defs";
import { ExtendBuffer } from "../utils";
import { Struct } from "../utils/Struct";

export class ENetBuffer extends Struct {
  public buf: ExtendBuffer;
  public dataLength: ENetUint16;

  constructor(buf: ExtendBuffer, dataLength: number) {
    super();
    this.buf = buf;
    this.dataLength = enet_uint16(dataLength);
    this.init();
  }
}
