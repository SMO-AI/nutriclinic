@@ .. @@
           <div className="hidden lg:flex items-center gap-8">
-            <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">О клинике</a>
-            <a href="#services" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Услуги</a>
+            <button onClick={() => handleScroll('about')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">О клинике</button>
+            <button onClick={() => handleScroll('services')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Услуги</button>
             <button 
               onClick={() => handleScroll('services')} 
               className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all"
             >
               Цены
             </button>
-            <a href="#doctors" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Врачи</a>
-            <a href="#blog" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Блог</a>
-            <a href="#reviews" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Отзывы</a>
-            <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Контакты</a>
-            <a href="#promotions" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Акции</a>
+            <button onClick={() => handleScroll('doctors')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Врачи</button>
+            <button onClick={() => handleScroll('blog')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Блог</button>
+            <button onClick={() => handleScroll('reviews')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Отзывы</button>
+            <button onClick={() => handleScroll('contact')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Контакты</button>
+            <button onClick={() => handleScroll('promotions')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Акции</button>
           </div>
 
           {/* Mobile menu */}
@@ .. @@
               </div>
               <div className="flex flex-col gap-6">
-                <a 
-                  href="#about" 
+                <button 
+                  onClick={() => handleScroll('about')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   О клинике
-                </a>
-                <a 
-                  href="#services" 
+                </button>
+                <button 
+                  onClick={() => handleScroll('services')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   Услуги
-                </a>
+                </button>
                 <button 
                   onClick={() => handleScroll('services')} 
                   className="text-left text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4"
                 >
                   Цены
                 </button>
-                <a 
-                  href="#doctors" 
+                <button 
+                  onClick={() => handleScroll('doctors')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   Врачи
-                </a>
-                <a 
-                  href="#blog" 
+                </button>
+                <button 
+                  onClick={() => handleScroll('blog')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   Блог
-                </a>
-                <a 
-                  href="#reviews" 
+                </button>
+                <button 
+                  onClick={() => handleScroll('reviews')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   Отзывы
-                </a>
-                <a 
-                  href="#contact" 
+                </button>
+                <button 
+                  onClick={() => handleScroll('contact')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   Контакты
-                </a>
-                <a 
-                  href="#promotions" 
+                </button>
+                <button 
+                  onClick={() => handleScroll('promotions')} 
                   className="text-xl text-gray-700 hover:text-primary-500 transition-colors" 
-                  onClick={() => setIsMenuOpen(false)}
                 >
                   Акции
-                </a>
+                </button>
               </div>
             </div>
           </div>