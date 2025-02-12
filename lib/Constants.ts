export enum ENET_PROTOCOL {
  MINIMUM_MTU = 576,
  MAXIMUM_MTU = 4096,
  MAXIMUM_PACKET_COMMANDS = 32,
  MINIMUM_WINDOW_SIZE = 4096,
  MAXIMUM_WINDOW_SIZE = 65536,
  MINIMUM_CHANNEL_COUNT = 1,
  MAXIMUM_CHANNEL_COUNT = 255,
  MAXIMUM_PEER_ID = 0xfff,
  MAXIMUM_FRAGMENT_COUNT = 1024 * 1024
}

export enum ENET_PROTOCOL_COMMAND {
  NONE = 0,
  ACKNOWLEDGE = 1,
  CONNECT = 2,
  VERIFY_CONNECT = 3,
  DISCONNECT = 4,
  PING = 5,
  SEND_RELIABLE = 6,
  SEND_UNRELIABLE = 7,
  SEND_FRAGMENT = 8,
  SEND_UNSEQUENCED = 9,
  BANDWIDTH_LIMIT = 10,
  THROTTLE_CONFIGURE = 11,
  SEND_UNRELIABLE_FRAGMENT = 12,
  COUNT = 13,

  MASK = 0x0f
}

export enum ENET_PROTOCOL_FLAG {
  COMMAND_FLAG_ACKNOWLEDGE = 1 << 7,
  COMMAND_FLAG_UNSEQUENCED = 1 << 6,

  HEADER_FLAG_COMPRESSED = 1 << 14,
  HEADER_FLAG_SENT_TIME = 1 << 15,
  HEADER_FLAG_MASK = HEADER_FLAG_COMPRESSED | HEADER_FLAG_SENT_TIME,

  HEADER_SESSION_MASK = 3 << 12,
  HEADER_SESSION_SHIFT = 12
}

export enum ENET_SOCKET_TYPE {
  STREAM = 1,
  DATAGRAM = 2
}

export enum ENET_SOCKET_WAIT {
  NONE = 0,
  SEND = 1 << 0,
  RECEIVE = 1 << 1,
  INTERRUPT = 1 << 2
}

export enum ENET_SOCKET_OPTION {
  NONBLOCK = 1,
  BROADCAST = 2,
  RCVBUF = 3,
  SNDBUF = 4,
  REUSEADDR = 5,
  RCVTIMEO = 6,
  SNDTIMEO = 7,
  ERROR = 8,
  NODELAY = 9,
  TTL = 10
}

export enum ENET_SOCKET_SHUTDOWN {
  READ = 0,
  WRITE = 1,
  READ_WRITE = 2
}

export const ENET_HOST_ANY = 0;
export const ENET_HOST_BROADCAST = 0xffffffff;
export const ENET_PORT_ANY = 0;

export enum ENET_PACKET_FLAG {
  /** packet must be received by the target peer and resend attempts should be made until the packet is delivered */
  RELIABLE = 1 << 0,
  /** packet will not be sequenced with other packets */
  UNSEQUENCED = 1 << 1,
  /** packet will not allocate data, and user must supply it instead */
  NO_ALLOCATE = 1 << 2,
  /** packet will be fragmented using unreliable (instead of reliable) sends if it exceeds the MTU */
  UNRELIABLE_FRAGMENT = 1 << 3,
  /** whether the packet has been sent from all queues it has been entered into */
  SENT = 1 << 8
}

export enum ENET_PEER_STATE {
  DISCONNECTED = 0,
  CONNECTING = 1,
  ACKNOWLEDGING_CONNECT = 2,
  CONNECTION_PENDING = 3,
  CONNECTION_SUCCEEDED = 4,
  CONNECTED = 5,
  DISCONNECT_LATER = 6,
  DISCONNECTING = 7,
  ACKNOWLEDGING_DISCONNECT = 8,
  ZOMBIE = 9
}

export const ENET_BUFFER_MAXIMUM = 1 + 2 * ENET_PROTOCOL.MAXIMUM_PACKET_COMMANDS;
