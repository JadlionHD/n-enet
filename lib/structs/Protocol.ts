import { enet_uint8, enet_uint16, enet_uint32, type ENetUint8, type ENetUint16, type ENetUint32 } from "../defs";
import { Struct } from "../utils/Struct";

export class Header extends Struct {
  public peerID: ENetUint16;
  public sentTime: ENetUint16;

  constructor(peerID: number, sentTime: number) {
    super();
    this.peerID = enet_uint16(peerID);
    this.sentTime = enet_uint16(sentTime);
    this.init();
  }
}

export class HeaderCommand extends Struct {
  public command: ENetUint8;
  public channelID: ENetUint8;
  public reliableSequenceNumber: ENetUint16;

  constructor(command: number, channelID: number, reliableSequenceNumber: number) {
    super();
    this.command = enet_uint8(command);
    this.channelID = enet_uint8(channelID);
    this.reliableSequenceNumber = enet_uint16(reliableSequenceNumber);
    this.init();
  }
}

export class Acknowledge extends Struct {
  public header: HeaderCommand;
  public receivedReliableSequenceNumber: ENetUint16;
  public receivedSentTime: ENetUint16;

  constructor(header: HeaderCommand, receivedReliableSequenceNumber: number, receivedSentTime: number) {
    super();
    this.header = header;
    this.receivedReliableSequenceNumber = enet_uint16(receivedReliableSequenceNumber);
    this.receivedSentTime = enet_uint16(receivedSentTime);

    this.init();
  }
}

export class Connect extends Struct {
  public header: HeaderCommand;
  public outgoingPeerID: ENetUint16;
  public incomingSessionID: ENetUint8;
  public outgoingSessionID: ENetUint8;
  public mtu: ENetUint32;
  public windowSize: ENetUint32;
  public channelCount: ENetUint32;
  public incomingBandwidth: ENetUint32;
  public outgoingBandwidth: ENetUint32;
  public packetThrottleInterval: ENetUint32;
  public packetThrottleAcceleration: ENetUint32;
  public packetThrottleDeceleration: ENetUint32;
  public connectID: ENetUint32;
  public data: ENetUint32;

  constructor(
    header: HeaderCommand,
    outgoingPeerID: number,
    incomingSessionID: number,
    outgoingSessionID: number,
    mtu: number,
    windowSize: number,
    channelCount: number,
    incomingBandwidth: number,
    outgoingBandwidth: number,
    packetThrottleInterval: number,
    packetThrottleAcceleration: number,
    packetThrottleDeceleration: number,
    connectID: number,
    data: number
  ) {
    super();
    this.header = header;
    this.outgoingPeerID = enet_uint16(outgoingPeerID);
    this.incomingSessionID = enet_uint8(incomingSessionID);
    this.outgoingSessionID = enet_uint8(outgoingSessionID);
    this.mtu = enet_uint32(mtu);
    this.windowSize = enet_uint32(windowSize);
    this.channelCount = enet_uint32(channelCount);
    this.incomingBandwidth = enet_uint32(incomingBandwidth);
    this.outgoingBandwidth = enet_uint32(outgoingBandwidth);
    this.packetThrottleInterval = enet_uint32(packetThrottleInterval);
    this.packetThrottleAcceleration = enet_uint32(packetThrottleAcceleration);
    this.packetThrottleDeceleration = enet_uint32(packetThrottleDeceleration);
    this.connectID = enet_uint32(connectID);
    this.data = enet_uint32(data);

    this.init();
  }
}

export class VerifyConnect extends Struct {
  public header: HeaderCommand;
  public outgoingPeerID: ENetUint16;
  public incomingSessionID: ENetUint8;
  public outgoingSessionID: ENetUint8;
  public mtu: ENetUint32;
  public windowSize: ENetUint32;
  public channelCount: ENetUint32;
  public incomingBandwidth: ENetUint32;
  public outgoingBandwidth: ENetUint32;
  public packetThrottleInterval: ENetUint32;
  public packetThrottleAcceleration: ENetUint32;
  public packetThrottleDeceleration: ENetUint32;
  public connectID: ENetUint32;

  constructor(
    header: HeaderCommand,
    outgoingPeerID: number,
    incomingSessionID: number,
    outgoingSessionID: number,
    mtu: number,
    windowSize: number,
    channelCount: number,
    incomingBandwidth: number,
    outgoingBandwidth: number,
    packetThrottleInterval: number,
    packetThrottleAcceleration: number,
    packetThrottleDeceleration: number,
    connectID: number
  ) {
    super();
    this.header = header;
    this.outgoingPeerID = enet_uint16(outgoingPeerID);
    this.incomingSessionID = enet_uint8(incomingSessionID);
    this.outgoingSessionID = enet_uint8(outgoingSessionID);
    this.mtu = enet_uint32(mtu);
    this.windowSize = enet_uint32(windowSize);
    this.channelCount = enet_uint32(channelCount);
    this.incomingBandwidth = enet_uint32(incomingBandwidth);
    this.outgoingBandwidth = enet_uint32(outgoingBandwidth);
    this.packetThrottleInterval = enet_uint32(packetThrottleInterval);
    this.packetThrottleAcceleration = enet_uint32(packetThrottleAcceleration);
    this.packetThrottleDeceleration = enet_uint32(packetThrottleDeceleration);
    this.connectID = enet_uint32(connectID);
    this.init();
  }
}

export class BandwidthLimit extends Struct {
  public header: HeaderCommand;
  public incomingBandwidth: ENetUint32;
  public outgoingBandwidth: ENetUint32;

  constructor(header: HeaderCommand, incomingBandwidth: number, outgoingBandwidth: number) {
    super();
    this.header = header;
    this.incomingBandwidth = enet_uint32(incomingBandwidth);
    this.outgoingBandwidth = enet_uint32(outgoingBandwidth);
    this.init();
  }
}

export class ThrottleConfigure extends Struct {
  public header: HeaderCommand;
  public packetThrottleInterval: ENetUint32;
  public packetThrottleAcceleration: ENetUint32;
  public packetThrottleDeceleration: ENetUint32;

  constructor(header: HeaderCommand, packetThrottleInterval: number, packetThrottleAcceleration: number, packetThrottleDeceleration: number) {
    super();
    this.header = header;
    this.packetThrottleInterval = enet_uint32(packetThrottleInterval);
    this.packetThrottleAcceleration = enet_uint32(packetThrottleAcceleration);
    this.packetThrottleDeceleration = enet_uint32(packetThrottleDeceleration);
    this.init();
  }
}

export class Disconnect extends Struct {
  public header: HeaderCommand;
  public data: ENetUint32;

  constructor(header: HeaderCommand, data: number) {
    super();
    this.header = header;
    this.data = enet_uint32(data);
    this.init();
  }
}

export class Ping extends Struct {
  public header: HeaderCommand;

  constructor(header: HeaderCommand) {
    super();
    this.header = header;
    this.init();
  }
}

export class SendReliable extends Struct {
  public header: HeaderCommand;
  public dataLength: ENetUint16;

  constructor(header: HeaderCommand, dataLength: number) {
    super();
    this.header = header;
    this.dataLength = enet_uint16(dataLength);
    this.init();
  }
}

export class SendUnreliable extends Struct {
  public header: HeaderCommand;
  public unreliableSequenceNumber: ENetUint16;
  public dataLength: ENetUint16;

  constructor(header: HeaderCommand, unreliableSequenceNumber: number, dataLength: number) {
    super();
    this.header = header;
    this.unreliableSequenceNumber = enet_uint16(unreliableSequenceNumber);
    this.dataLength = enet_uint16(dataLength);
    this.init();
  }
}

export class SendUnsequenced extends Struct {
  public header: HeaderCommand;
  public unsequencedGroup: ENetUint16;
  public dataLength: ENetUint16;

  constructor(header: HeaderCommand, unsequencedGroup: number, dataLength: number) {
    super();
    this.header = header;
    this.unsequencedGroup = enet_uint16(unsequencedGroup);
    this.dataLength = enet_uint16(dataLength);
    this.init();
  }
}

export class SendFragment extends Struct {
  public header: HeaderCommand;
  public startSequenceNumber: ENetUint16;
  public dataLength: ENetUint16;
  public fragmentCount: ENetUint32;
  public fragmentNumber: ENetUint32;
  public totalLength: ENetUint32;
  public fragmentOffset: ENetUint32;

  constructor(
    header: HeaderCommand,
    startSequenceNumber: number,
    dataLength: number,
    fragmentCount: number,
    fragmentNumber: number,
    totalLength: number,
    fragmentOffset: number
  ) {
    super();
    this.header = header;
    this.startSequenceNumber = enet_uint16(startSequenceNumber);
    this.dataLength = enet_uint16(dataLength);
    this.fragmentCount = enet_uint32(fragmentCount);
    this.fragmentNumber = enet_uint32(fragmentNumber);
    this.totalLength = enet_uint32(totalLength);
    this.fragmentOffset = enet_uint32(fragmentOffset);
    this.init();
  }
}
