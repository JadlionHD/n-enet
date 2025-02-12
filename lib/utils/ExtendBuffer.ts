export class ExtendBuffer {
  public data: Buffer;

  constructor(data: Buffer | number, public mempos = 0) {
    this.data = Buffer.isBuffer(data) ? data : Buffer.alloc(data);
  }

  private read(method: keyof Buffer, size: number): number {
    const val = (this.data[method] as Function)(this.mempos);
    this.mempos += size;
    return val;
  }

  private write(method: keyof Buffer, value: number, size: number): void {
    (this.data[method] as Function)(value, this.mempos);
    this.mempos += size;
  }

  public readU8 = () => this.read("readUInt8", 1);
  public readU16 = (be = false) => this.read(be ? "readUInt16BE" : "readUInt16LE", 2);
  public readU32 = (be = false) => this.read(be ? "readUInt32BE" : "readUInt32LE", 4);

  public readI8 = () => this.read("readInt8", 1);
  public readI16 = (be = false) => this.read(be ? "readInt16BE" : "readInt16LE", 2);
  public readI32 = (be = false) => this.read(be ? "readInt32BE" : "readInt32LE", 4);

  public writeU8 = (value: number) => this.write("writeUInt8", value, 1);
  public writeU16 = (value: number, be = false) => this.write(be ? "writeUInt16BE" : "writeUInt16LE", value, 2);
  public writeU32 = (value: number, be = false) => this.write(be ? "writeUInt32BE" : "writeUInt32LE", value, 4);

  public writeI8 = (value: number) => this.write("writeInt8", value, 1);
  public writeI16 = (value: number, be = false) => this.write(be ? "writeInt16BE" : "writeInt16LE", value, 2);
  public writeI32 = (value: number, be = false) => this.write(be ? "writeInt32BE" : "writeInt32LE", value, 4);

  public writeU = (size: number, value: number, be = false) => {
    const methods = { 1: this.writeU8, 2: this.writeU16, 4: this.writeU32 };
    methods[size as 1 | 2 | 4](value, be);
  };

  public writeI = (size: number, value: number) => {
    const methods = { 1: this.writeI8, 2: this.writeI16, 4: this.writeI32 };
    methods[size as 1 | 2 | 4](value);
  };

  public async readString(be = false) {
    const len = be ? this.data.readInt16BE(this.mempos) : this.data.readInt16LE(this.mempos);
    this.mempos += 2;
    return this.data.toString("utf-8", this.mempos, (this.mempos += len));
  }

  public async writeString(str: string, be = false) {
    be ? this.data.writeUInt16BE(str.length, this.mempos) : this.data.writeUInt16LE(str.length, this.mempos);
    this.mempos += 2;
    if (str.length) this.data.fill(str, this.mempos);
    this.mempos += str.length;
  }
}
