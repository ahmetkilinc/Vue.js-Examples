var app = new Vue({ 
    
    el: '#app',
    data: {
		
        message: 'Hello VueWorld!',
        vuelogo: 'Sayfa ' + new Date().toLocaleString() + ' tarihinde yüklendi.'
    }
});
