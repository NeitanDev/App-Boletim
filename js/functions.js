$$("#btnver").click(function () {
    app.dialog.preloader('Loading...');
    app.request.json('https://aluno.etecarmine.com.br/3Etim/Neitan/webservice.php?rm=' + $$('#txtrm').val(), function (data) {
        console.log('encontrei ' + data.length + ' registros');
        for (linha = 0; linha < data.length; linha++) {
            console.log('');
            console.log('REGISTROS DA LINHA' + linha);
            console.log('aluno_rm: ' + data[linha].aluno_rm);
            console.log('aluno_nome: ' + data[linha].aluno_nome);

        }

        if (data.length > 0) {
            localStorage.setItem("rm", $$('#txtrm').val());
            mainView.router.navigate({ name: 'mencoes' });
        } else {
            app.dialog.alert('RM não encontrado')

        }
        // app.dialog.close();
    });
});

function CarregaMencoes() {
    var conteudo = ``;
    app.request.json('https://aluno.etecarmine.com.br/3Etim/Neitan/mencoes.php?rm=' + $$('#txtrm').val(),
        function (data) {
            console.log('https://aluno.etecarmine.com.br/3Etim/Neitan/mencoes.php?rm=' + $$('#txtrm').val());
            for (linha = 0; linha < data.length; linha++) {
                console.log('');
                console.log('REGISTROS DA LINHA' + linha);
                console.log('mencao_cod: ' + data[linha].mencao_cod);
                console.log('mencao_componente: ' + data[linha].mencao_componente);
                console.log('mencao: ' + data[linha].mencao);

                conteudo += `<li><div class="item-content"><div class="item-inner">` +
                    `<div class="item-title">${data[linha].mencao_componente}</div>` +
                    `<div class="item-after">${data[linha].mencao}</div>` +
                    `</div></div></li>`;
            }

            console.log(conteudo);
            $$('#lista').html(conteudo);
            app.dialog.close();
        });
}