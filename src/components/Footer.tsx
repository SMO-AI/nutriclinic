@@ .. @@
         <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 pt-4 border-t border-gray-200">
           <div>©2022- 2023. Все права защищены.</div>
-          <a href="/privacy" className="hover:text-primary-600 transition-colors">
+          <button onClick={() => console.log('Privacy policy')} className="hover:text-primary-600 transition-colors">
             Политика конфиденциальности
-          </a>
+          </button>
         </div>
       </div>
     </footer>