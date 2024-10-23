# Time Value Store

A key value store that has expiry on its key value pairs.

## Account Types

There exists 3 types of accounts. The admin accounts and user accounts.

1. The `superadm` account manages all admin accounts. There can only be one superadm account. 
2. Admin accounts can manage user accouts, nothing else. The admin accounts have expiry date and credit. When credit reaches zero, then the admin cannot anymore create users. One credit is removed for each successful user it creates. If the admin account reaches expiry, then it is deleted.
3. User accounts can manage their key-value pairs. User accounts may also have expiry set by their admins. User accounts also expire if their admin account expires.

## Key-Value Pairs

Users send in data and in return they get a key to retireve the sent in data. Anyone who knows the key, can retrieve that data. It is up to the user to keep the key private or to share it.

The data may have credit or expiry. If it has credit, then one credit is removed for each fetch of that data. If credit reaches zero, then the key-value pair is removed. If the key-value pair has an expiry, and exceeds the expiry, then it is also removed.

## Transmission

The key-value pairs can be transmitted in 3 ways.

1. Via the WebGUI.
2. As JSON over HTTP(S).
3. As binary stream over TCP.

## Configuration

Configure this file in ./data/.env

GUI_PORT=1973
JSON_PORT=1945
TCP_PORT=1949
SUPERADM=superadm
AES_KEY=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08


