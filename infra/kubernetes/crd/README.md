### CRD

You can generate the TS code and needed types for traefik via crd2pulumi

```
wget https://raw.githubusercontent.com/traefik/traefik-helm-chart/master/traefik/crds/middlewares.yaml
wget https://raw.githubusercontent.com/traefik/traefik-helm-chart/master/traefik/crds/ingressroute.yaml
crd2pulumi --nodejsPath ./generated ./*.yaml
```
