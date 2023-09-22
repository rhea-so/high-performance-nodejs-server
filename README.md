# high-performance-nodejs-server

```sh
bombardier -c 125 -n 10000000 -m POST -H 'Content-Type: application/json' -b '{"query":"{add(x:200,y:1000)}"}' http://localhost:3000/graphql
bombardier -c 1 -n 1 -m POST -H "Content-Type: application/json" -f "payload.json" http://localhost:3000/graphql
```
