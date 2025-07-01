




function App() {
  return (
   <>
     <Routes>
           <Route path="/" element={<Home />} />
           <Route path="clients" element={<Clients />} />
           <Route path="about" element={<About />} />
           <Route path="blog" element={<Blog />} />
           <Route path="community" element={ <Community/>} />
           <Route path="authmodals" element={ <AuthModals/>}/>
    </Routes>
   </>


   
  );
}

export default App;
