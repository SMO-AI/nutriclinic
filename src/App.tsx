@@ .. @@
 function App() {
   return (
   )
 }
-    <div className="font-sans bg-[#F9F6F1] pt-[120px] sm:pt-[140px]">
+    <div className="font-sans bg-[#F9F6F1] pt-[120px] sm:pt-[140px]" id="app">
       <Navigation />
-      <TeamSection />
-      <Hero />
-      <HowWeWorkSection />
-      <SymptomsSection />
-      <ResultsSection />
-      <ServicesSection />
-      <ExpertsSection />
-      <ClinicHistorySection />
-      <ConsultationSection />
+      <section id="about">
+        <TeamSection />
+      </section>
+      <Hero />
+      <HowWeWorkSection />
+      <SymptomsSection />
+      <ResultsSection />
+      <section id="services">
+        <ServicesSection />
+      </section>
+      <section id="doctors">
+        <ExpertsSection />
+      </section>
+      <ClinicHistorySection />
+      <section id="contact">
+        <ConsultationSection />
+      </section>
       <Footer />
     </div>
   );