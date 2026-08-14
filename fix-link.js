const fs = require('fs');
let content = fs.readFileSync('app/page.js', 'utf8');
content = content.replace(
  '                </div>\n              </div>\n            ))}',
  '                </div>\n              </Link>\n            ))}'
);
content = content.replace(
  '                </div>\r\n              </div>\r\n            ))}',
  '                </div>\r\n              </Link>\r\n            ))}'
);
fs.writeFileSync('app/page.js', content);
console.log('Fixed link closing tag');
