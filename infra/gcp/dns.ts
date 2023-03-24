import * as gcp from '@pulumi/gcp';
import * as pulumi from '@pulumi/pulumi';

export function Deploy(m: Map<string, pulumi.Output<string>>) {
  m.forEach((ip, domain) => {
    const zone = new gcp.dns.ManagedZone(domain, {
      name: domain.replace(/\./g, '-'),
      dnsName: pulumi.interpolate`${domain}.`,
    });
    new gcp.dns.RecordSet(domain, {
      name: zone.dnsName,
      type: 'A',
      ttl: 300,
      managedZone: zone.name,
      rrdatas: [ip],
    });
  });
}
