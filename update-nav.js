const fs = require('fs');

let content = fs.readFileSync('components/site/nav.js', 'utf8');

// 1. Import
content = content.replace(
  "import { useCart } from '@/lib/cart-context';",
  "import { useCart } from '@/lib/cart-context';\nimport LoginModal from './login-modal';"
);

// 2. State
content = content.replace(
  "const { totalItems, setIsCartOpen } = useCart();",
  `const { totalItems, setIsCartOpen } = useCart();\n  const [isLoginOpen, setIsLoginOpen] = useState(false);\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    try {\n      const stored = localStorage.getItem('user');\n      if (stored) setUser(JSON.parse(stored));\n    } catch(e) {}\n  }, []);`
);

// 3. Desktop Button
content = content.replace(
  /<Link[\s\S]*?href="\/login"[\s\S]*?className="inline-flex items-center gap-1\.5 px-3\.5 py-1\.5 rounded-md border border-\[#2b4c80\] text-\[13\.5px\] font-bold text-white hover:border-\[#D4AF37\] hover:text-\[#D4AF37\] hover:bg-\[#0c1f3d\] transition-all"[\s\S]*?>[\s\S]*?<User className="h-4 w-4 text-\[#D4AF37\]" \/>[\s\S]*?<span>Login<\/span>[\s\S]*?<\/Link>/,
  `<button
              onClick={() => user ? null : setIsLoginOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[#2b4c80] text-[13.5px] font-bold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#0c1f3d] transition-all"
            >
              <User className="h-4 w-4 text-[#D4AF37]" />
              <span>{user ? \`Hello, \${user.name}\` : 'Login'}</span>
            </button>`
);

// 4. Mobile Button
content = content.replace(
  /<Link[\s\S]*?href="\/login"[\s\S]*?onClick=\{\(\) => setMobileOpen\(false\)\}[\s\S]*?className="inline-flex items-center gap-1\.5 px-3 py-1\.5 rounded border border-\[#2b4c80\] text-sm font-bold text-\[#D4AF37\]"[\s\S]*?>[\s\S]*?<User className="h-4 w-4" \/>[\s\S]*?Login[\s\S]*?<\/Link>/,
  `<button
                      onClick={() => {
                        setMobileOpen(false);
                        if (!user) setIsLoginOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#2b4c80] text-sm font-bold text-[#D4AF37]"
                    >
                      <User className="h-4 w-4" />
                      {user ? \`Hello, \${user.name}\` : 'Login'}
                    </button>`
);

// 5. Render Modal
content = content.replace(
  '    </header>',
  '      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} onLogin={setUser} />\n    </header>'
);

fs.writeFileSync('components/site/nav.js', content);
console.log('Update nav complete');
