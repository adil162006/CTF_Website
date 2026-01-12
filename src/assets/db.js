export const challenges = [
  {
    id: "chal_001",
    category: "CRYPTOGRAPHY",
    points: "250 PTS",
    title: "RSA LEAK DETECTOR",
    description:
      "Intercepted communication suggests a flawed key generation process. Decrypt the message...",
    rate: 45,
    author: "CIPHER_WIZARD",
    solves: "12 TEAMS",
    resources: ["capture_data_v4.pcap", "oracle_service.py"],
    chalId: "0x8832_RSA"
  },
  {
    id: "chal_002",
    category: "WEB EXPLOITATION",
    points: "100 PTS",
    title: "COOKIE MONSTER",
    description:
      "The session management on this portal seems tasty. Can you bypass the authentication?",
    rate: 82,
    author: "BYTE_LORD",
    solves: "34 TEAMS",
    resources: ["session_dump.txt"],
    chalId: "0x7A12_WEB"
  },
  {
    id: "chal_003",
    category: "REVERSE ENGINEERING",
    points: "500 PTS",
    title: "BINARY ODYSSEY",
    description:
      "A custom ELF binary that validates input through a series of complex logical gates.",
    rate: 12,
    author: "REV_MASTER",
    solves: "5 TEAMS",
    resources: ["binary_odyssey"],
    chalId: "0x9912_RE"
  }
];
