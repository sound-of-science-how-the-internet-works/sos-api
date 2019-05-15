exports.seed = (service) => {

  service.create({ 
    panel: 'desktop', 
    valid: false,
    scheme: 'https://',
    subdomain: 'wwww',
    domain: 'nucleus',
    tld: 'be'
  })

  service.create({ 
    panel: 'dns', 
    valid: false,
    data: {
      ip: {
        p1: 1,
        p2: 2,
        p3: 3,
        p4: 4
      }
    }
  })

  service.create({ 
    panel: 'bgp', 
    valid: false,
  }) 

  service.create({ 
    panel: 'server', 
    valid: false,
  })  
}
