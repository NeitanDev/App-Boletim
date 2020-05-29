$$("#btnver").click(function () {
    app.dialog.preloader('Loading...');
    app.request.json('https://aluno.etecarmine.com.br/3Etim/Neitan/webservice.php?rm='+$$('#txtrm').val(), function (data) {
        console.log('encontrei ' + data.length + ' registros');
        for (linha = 0; linha < data.length; linha++) {
            console.log('');
            console.log('REGISTROS DA LINHA' + linha);
            console.log('aluno_rm: ' + data[linha].aluno_rm);
            console.log('aluno_nome: ' + data[linha].aluno_nome);
        
        }

        if(data.length > 0){
            localStorage.setItem("rm", $$('#txtrm').val());
            mainView.router.navigate({name: 'mencoes'});
        }else { 
            app.dialog.alert('RM não encontrado')

        }
        app.dialog.close();
    });
});