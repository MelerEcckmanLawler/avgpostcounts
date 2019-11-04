let data = `{
  "Jailor": {
    "chat": 1018,
    "matches": 902,
    "avg": 1.13
  },
  "Escort": {
    "chat": 168,
    "matches": 391,
    "avg": 0.43
  },
  "Godfather": {
    "chat": 323,
    "matches": 902,
    "avg": 0.36
  },
  "Vigilante": {
    "chat": 377,
    "matches": 678,
    "avg": 0.56
  },
  "Spy": {
    "chat": 353,
    "matches": 640,
    "avg": 0.55
  },
  "BodyGuard": {
    "chat": 354,
    "matches": 681,
    "avg": 0.52
  },
  "Framer": {
    "chat": 71,
    "matches": 228,
    "avg": 0.31
  },
  "Jester": {
    "chat": 267,
    "matches": 440,
    "avg": 0.61
  },
  "Arsonist": {
    "chat": 116,
    "matches": 319,
    "avg": 0.36
  },
  "Mafioso": {
    "chat": 402,
    "matches": 902,
    "avg": 0.45
  },
  "Mayor": {
    "chat": 326,
    "matches": 370,
    "avg": 0.88
  },
  "Janitor": {
    "chat": 79,
    "matches": 190,
    "avg": 0.42
  },
  "Witch": {
    "chat": 91,
    "matches": 290,
    "avg": 0.31
  },
  "Sheriff": {
    "chat": 347,
    "matches": 696,
    "avg": 0.5
  },
  "Medium": {
    "chat": 316,
    "matches": 422,
    "avg": 0.75
  },
  "Random Mafia": {
    "chat": 110,
    "matches": 315,
    "avg": 0.35
  },
  "Lookout": {
    "chat": 327,
    "matches": 686,
    "avg": 0.48
  },
  "Forger": {
    "chat": 89,
    "matches": 230,
    "avg": 0.39
  },
  "Doctor": {
    "chat": 331,
    "matches": 688,
    "avg": 0.48
  },
  "Retributionist": {
    "chat": 300,
    "matches": 336,
    "avg": 0.89
  },
  "Transporter": {
    "chat": 189,
    "matches": 372,
    "avg": 0.51
  },
  "Executioner": {
    "chat": 69,
    "matches": 172,
    "avg": 0.4
  },
  "Consort": {
    "chat": 55,
    "matches": 230,
    "avg": 0.24
  },
  "Consigliere": {
    "chat": 65,
    "matches": 167,
    "avg": 0.39
  },
  "SerialKiller": {
    "chat": 118,
    "matches": 288,
    "avg": 0.41
  },
  "Investigator": {
    "chat": 335,
    "matches": 686,
    "avg": 0.49
  },
  "Veteran": {
    "chat": 663,
    "matches": 570,
    "avg": 1.16
  },
  "Disguiser": {
    "chat": 64,
    "matches": 178,
    "avg": 0.36
  },
  "Werewolf": {
    "chat": 118,
    "matches": 295,
    "avg": 0.4
  },
  "Blackmailer": {
    "chat": 83,
    "matches": 218,
    "avg": 0.38
  }
}`

data = JSON.parse(data)

let arr = []
for (let role in data) {
  let entry = { role: role, avg: data[role].avg, chat: data[role].chat, matches: data[role].matches }
  arr.push(entry)
}
arr = arr.sort((a, b) => (a.role > b.role) ? 1 : -1)
arr = arr.sort((a, b) => (a.avg < b.avg) ? 1 : -1)
console.log(arr)
console.log(`|ROLE|AVG|TOTAL|MATCHES|`)
console.log(`|:--|--:|--:|--:|`)
for (let i = 0; i < arr.length; i++) {
  let _ = arr[i]
  console.log(`|${_.role}|${_.avg}|${_.chat}|${_.matches}|`)
}

for (let i = 0; i < arr.length; i++) {
  let _ = arr[i]
  console.log(`${_.role}, ${_.avg}`)
}


//----------------D2 V------
data = `{
  "Jailor": {
    "chat": 2156,
    "matches": 835,
    "avg": 2.58
  },
  "Escort": {
    "chat": 945,
    "matches": 342,
    "avg": 2.76
  },
  "Godfather": {
    "chat": 1915,
    "matches": 901,
    "avg": 2.13
  },
  "Vigilante": {
    "chat": 1579,
    "matches": 609,
    "avg": 2.59
  },
  "Spy": {
    "chat": 2344,
    "matches": 577,
    "avg": 4.06
  },
  "BodyGuard": {
    "chat": 1555,
    "matches": 565,
    "avg": 2.75
  },
  "Framer": {
    "chat": 504,
    "matches": 218,
    "avg": 2.31
  },
  "Jester": {
    "chat": 1304,
    "matches": 419,
    "avg": 3.11
  },
  "Arsonist": {
    "chat": 564,
    "matches": 312,
    "avg": 1.81
  },
  "Mafioso": {
    "chat": 1745,
    "matches": 833,
    "avg": 2.09
  },
  "Mayor": {
    "chat": 975,
    "matches": 326,
    "avg": 2.99
  },
  "Janitor": {
    "chat": 416,
    "matches": 174,
    "avg": 2.39
  },
  "Witch": {
    "chat": 550,
    "matches": 282,
    "avg": 1.95
  },
  "Sheriff": {
    "chat": 2377,
    "matches": 619,
    "avg": 3.84
  },
  "Medium": {
    "chat": 1193,
    "matches": 391,
    "avg": 3.05
  },
  "Random Mafia": {
    "chat": 669,
    "matches": 315,
    "avg": 2.12
  },
  "Lookout": {
    "chat": 1732,
    "matches": 607,
    "avg": 2.85
  },
  "Forger": {
    "chat": 460,
    "matches": 220,
    "avg": 2.09
  },
  "Doctor": {
    "chat": 1675,
    "matches": 607,
    "avg": 2.76
  },
  "Retributionist": {
    "chat": 819,
    "matches": 304,
    "avg": 2.69
  },
  "Transporter": {
    "chat": 971,
    "matches": 341,
    "avg": 2.85
  },
  "Executioner": {
    "chat": 667,
    "matches": 172,
    "avg": 3.88
  },
  "Consort": {
    "chat": 524,
    "matches": 221,
    "avg": 2.37
  },
  "Consigliere": {
    "chat": 383,
    "matches": 160,
    "avg": 2.39
  },
  "SerialKiller": {
    "chat": 560,
    "matches": 262,
    "avg": 2.14
  },
  "Investigator": {
    "chat": 2161,
    "matches": 598,
    "avg": 3.61
  },
  "Veteran": {
    "chat": 1805,
    "matches": 547,
    "avg": 3.3
  },
  "Disguiser": {
    "chat": 333,
    "matches": 174,
    "avg": 1.91
  },
  "Werewolf": {
    "chat": 671,
    "matches": 295,
    "avg": 2.27
  },
  "Blackmailer": {
    "chat": 464,
    "matches": 208,
    "avg": 2.23
  }
}`

data = JSON.parse(data)

arr = []
for (let role in data) {
  let entry = { role: role, avg: data[role].avg, chat: data[role].chat, matches: data[role].matches }
  arr.push(entry)
}
arr = arr.sort((a, b) => (a.role > b.role) ? 1 : -1)
arr = arr.sort((a, b) => (a.avg < b.avg) ? 1 : -1)
console.log()
console.log()
console.log(arr)

console.log(`|ROLE|AVG|TOTAL|MATCHES|`)
console.log(`|:--|--:|--:|--:|`)
for (let i = 0; i < arr.length; i++) {
  let _ = arr[i]
  console.log(`|${_.role}|${_.avg}|${_.chat}|${_.matches}|`)
}
for (let i = 0; i < arr.length; i++) {
  let _ = arr[i]
  console.log(`${_.role}, ${_.avg}`)
}
