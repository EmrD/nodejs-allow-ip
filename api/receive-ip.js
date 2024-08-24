export default function handler(req, res) {
  function isValidIp(ip) {
      const ipAllowjson = ["IP_ADDR1", "IP_ADDR2", "IP_ADDR3"];
      return ipAllowjson.includes(ip);
  }

  if (req.method === 'POST') {
      const { ip } = req.body;
      if (isValidIp(ip)) {
          console.log('Geçerli IP:', ip);
          res.status(200).json({ valid: true, message: 'IP adresiniz geçerli.' });
      } else {
          console.log('Geçersiz IP:', ip);
          res.status(200).json({ valid: false, message: 'Geçersiz IP adresi.' });
      }
  } else {
      res.status(405).send('Yöntem desteklenmiyor');
  }
}