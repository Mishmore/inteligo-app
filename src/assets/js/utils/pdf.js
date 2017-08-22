//variable a reemplazar por objeto local que almacene toda la data del cliente
var indexPerfil = null;

var switchPerfil = function() {
    switch (perfil) {
        case 'defensivo':
            indexPerfil = 0;
            break;
        case 'altamente conservador':
            indexPerfil = 1;
            break;
        case 'conservador':
            indexPerfil = 2;
            break;
        case 'moderado':
            indexPerfil = 3;
            break;
        case 'agresivo':
            indexPerfil = 4;
            break;
    }
}

function impPDF() {

    sector = sector.toString();
    identificadorCliente = identificadorCliente.toString();
    //Todos los campos se identifican con 'pdf-[nombre-de-id]'
    //Llenar con text los campos vacíos antes de generar PDF

    //Código para incluir imagen (no es necesario tag de img en el html)
    var logotipo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAyCAMAAABCiTbWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFaoHFen6GQl2t0tnsfZHKxsjPwcPKRVmS9vf4gYKFsrrR4eXu0tbkbnympK7JXWqNqrbd6ertTGWtaHKKZnGLJUSc3d7iq7PLjJ7Td3yHc3mIK0ieHj6bq7jfJUKZmajWkKHU2NzoNU6V5ujtQ1eT3+HnOVGVRmCtOVeqhpnOP1qp1dnml6fWJEaooa7XsLzgo7HZ+Pn6usHWhIWEW3S7ZHzD1NXbTV6RYXm8v8TRYnOkRGG2ME6lVmWPU2uxdovFdovKYGyMz9bp9PT2IkCajJzN7/D0jqDTLkiXJEWnxc7o7u/xtbvOb3aJkqHNW3K1V3G8g4SE8vT38PL2foGFUGCQUWGQOVizXnW2UmqwusXlK0eYUGu7eY7Me3+GWGeO0NfuzdLhKEWYKEad5ObttcDhSl2RanOKOlWlPVqwnavTM0yWW2iN4eLlTWavw8znfoCGU2y0P1WTXXfA5ufqZW+LYm2MLU2lHDybPlSUYnrCVW63MEuXNFKpIkOhTl+QSWOvR1qSJkSZkJ/Mx8/mWXCzSWSx5ejwIkKfSV2WO1q0zM7TID+aIECagYmjfIWhgYOFqrDAMFCu9fb3NVKnrbbPdoCfJEOcIkGaxs7lGzyblqHCxs7mKUmjgI60+vr7doWwgJPJf4KF6+3zjZm7bHWJ8fHz8/T4eIWtLUugjJzLnafD4+fyVWidL1Cv7OzvX2+e+/z9y83UMlGo8vP3fYCGJUaiLk6ugJPOytLq+fn7cHeJbnWJKkaYmKC3UGiv297obXaJKUebnKvYVGOP2uDwN1ayI0KZkqPSk6TVlKTRcYW+x9DqxsvbcYbCcIbIkZy84ePo4+ToP12zaX/A/P39N0+W+/v8z9HWTGazQ1+vycvSzM/WboO99/j5PVin1tjd2tvf6+zvTGi5JEKa5+nwgJTOX2uN2dzizdXseY3Gg5XKn6nEhJbMsLbI7e/0uL3LK0qlgpPGME2hv8nm8PH18PH28vP1HT2bh5O1iZnJZ3/ETmiygIKFIUCa////+Om3OwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAfFSURBVHja5Jl5QJRFFMABD1gx8QByacWidUElNVHRFJS8qESkFrRILUzQ1jJQNJJCUDnq29pS8xM8SiW7TZOyiLKszC47LTusbAvtLjvsmNne++5j15a++KPd9wfMvDffN/PbN/PmzXwhD648tXTVaR70BIaETI05lTzXekinmxoo6Cuob3G6G1Mn6LQrggDdmdncuJ8GJXpBnMtGgxDdQtlosoQNQvSTVkuG3avTAx3dkpdQaSdxbPChW6yVmaGEPE+DDf2kxVa6P8pFTI5gQ78+3GZ2lDcR0sQGGXp9ha1ogSXKREgWDS70+lxrmr2gBZxO0tqIvrWmpuZJoQzFGo1ZUGErvcBzT3pRcw+iYau2s92g3K3RXdll26ZN3brUeB/eWV1Qanyi16emHQptZXJdgJ7bRvSx1dXVHYQyFKunqM2oElrpBZ7r4EXNPYiGsdrOhoByiIr73uKwpKUbN65Jqn7kAd3YvnhjWWISimzUoJ8s7JVfmpPAZAE5yWsjejoY1wtlbJi0V2VGldBKL/Dcei9q7kE0pGs7ux+U98vVvad98Jj01E2PLjtd3fr3w0t1RjW6xWG2lW0xs/n2f4O+CowrFZx02SVtQV/pCx0Nq7SdrVCNZO3hm9QPJt29XW67/Z0fNUYdOlMel8tmmdKcVtN/gk6/8oIeMl2QGKifECvHecKY6WrxE71bEtfd6OFnghx8HMvrRkaK1tUjOevlM8E4nDd+rUWfEG12FxJSQvOQvM1rXY8e85IefUQnQXpCfZBYuYcn7NlJLf6hT+HIb+izK3Y1yFudh7yI9SsE6853sDZt8IgeYIzt3PsMHFh/NXp9WkoJE0dcBXQJh55mGJ2eMUWHLkk21M9X1JEw29t7/wm9Zj72dCBWNnYKobTvJKEyGTve86k0By77HNlHKdEtZfasCTZCQhlaxKEvMYiOP+/8Yz7Rlc19EvqD3h+K7Nz3lNZrDiZvFmP7fWD+8iKF8aNPcHEckdGdLXEpZZZSQhop7cWhmy3G0Lvjn0UR7Y1+1Qko9tWYzxbJuR8me4fK+DOGmcEyOhOVk8UWQGgvEtFd+cbQuV5px/ZG3welxM2+BjX+hGLZizITdMUSOmMjrkrGCqnMAhGdhBtE/20RVTjEH/QZ/wL9UnShz3T1Qm8PvwmnkzkSOvuUq6mFRgFwqoSewRhD9xwbjRHlB//R592qkH7+oc+BzWq8T/SrceV5zb5EdMaaQqItFjMAz6ZCmCOhVQbRPaNwVb3dz290eo5CFvqFfhTnu6QedbssnOIVML+gG+ofCnQ2jpBKmp8DwNGUcz4udqvTILpnELfjbvYbXSkr/UJ/QrVOht8hi+Tf1bqhTpXRGWsORjUr4dELeXSMeAbRPR2x1L8dvf6EKh1I12bBqDhyKnS2mdvLKpA3jqE2l8DucBpFP3cYFvv4u9ZvU4h/a72HasJ/fgEvUmcfQ6GDbqg/yei2FEKiKJ2NuDnxNL6JJze1MkbRPXsx15qzsP0iPIY5aUo/fScv88TOMMxdrXtlTwmdwcy1kNJoDjiBMkKcI00JhtE932FWl9iv3fb1Z7xtbjPEzhZ6O/EudsPGw6NzXi4RI3slpXnCjHeVMobRPX2x8uf49kJPxmOPdnfLFjvbDnks+6rGOg7jA49egqQ2cT/PcNJyu+B2l40xjO4Zi7XJ7ZbIYpI+ebN+RvOlb6G0vIcuzaFzOXQnd1JzSLk7Sy1CUkNMT8UbRx8/TRV02+P4QvepdrDjkE+wQjaP622ckn3XANAcXs2hu2chJSvl7rDArWKMT6lgDKN7uib5ie7z0Jp9CvRfPsBXnzlCskV8iE4foGhJZ74vGo9ehinmuqH8odXBcTJimCOzGVplFtCJPYExjO5Ze59/6Nfeohbvhs80VxWv3cjdwnTvdM2OiIjFsZ0PTMf6IPHF3CXNaLDeE7EjtjOXaKy7W7iqCOcY3VIWZ3ZTJlV0u6uogDGM7nk5xi/0mJvV4t0Qor2g+obzO304ZE9y8rhF53CVYdKLLx4mWHsn7+GNj3UUL6jSOMZyyqc0QFsGQT9UdHtKGmsc3fM6bXMiq7yWVEm67lryyuKN6iZLRyou6XePXKq+lrxXupYs5RAhwlcKtL1gq68Q0SGVZ/xCL66trd0glKFYqzJ+/5dWpWyOsqFWL94NxaCcCP8nKp7elDimVhxh7Zjl29RD2yZba8cc7iJfRjdyhOBqh0lwdCalVXEiuqlJtdx9ot9VV1fXVShDsU5tHahVKZtzsbBOL94Nd+ElLPzvpnxdZMNDiQPWgIQtP6/hV+3YIhvqwtCYFPZQw7uKTxB82vo8pRYhgcWklrFukdxuzmf+D9/cJg1cCxK507s1Eo1DI9UfnnhfwzldPKgTO7j9ZJFLYo9uYQLzcyPP9yyUcsU5njGB0nIp0pGc6AJnAKO7YHfLFBPYnASMdHaZPSPeGbjoGOeYZpG1GX4INprI7BVuZwCiC85dAMU8aXnD+Y1mmmX2lNSqAEQXnAvHFtoizXFzPkyCkusUfl8SH7DoJljfzlJpN18AvwQzW17uxJXhDjh0Ma7j9nbILidxeH9TukXB3uoONPRwAW0W+Nkph7ZZBXiB00gU7M0FAYaeKaLhlyabTNoL57cjVMFOshwBg/63AAMA4i2Hicz8f7IAAAAASUVORK5CYII='
    var doc = new jsPDF();

    doc.addImage(logotipo, 'PNG', 20, 21, 50, 9); //Logo

    //Reporte del perfil
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(35, 62, 153);
    doc.text(140, 25, 'Reporte del perfil inversor');

    //Codigo cliente
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(35, 62, 153);
    doc.text(157, 30, 'Cliente:');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(176, 30, identificadorCliente);

    //Perfil del inversor
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 45, 'Estimado cliente:');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 50, 'Basándonos en los objetivos de riesgo y rentabilidad que usted nos ha especificado, hemos \ndeterminado que su perfil es:');

    //Perfil del inversionista
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(35, 62, 153);
    doc.text(20, 65, 'Perfil del inversionista:');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(70, 65, perfilesData[indexPerfil].perfil);

    //Descripción del perfil
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(35, 62, 153);
    doc.text(20, 75, 'Descripción del perfil');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 80, perfilesData[indexPerfil].retorno_texto);

    //Descripción estratégica de activos
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(35, 62, 153);
    doc.text(20, 95, 'Distribución Estratégica de Activos');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 100, 'Tomando en cuenta su perfil de inversión, le sugerimos la siguiente distribución estratégica \npor cada clase de activos:');

    //Grafico
    doc.addImage(perfilesData[indexPerfil].grafico, 'PNG', 70, 120, 100, 0);

    //Retorno anual
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 205, 'Retorno promedio anual esperado: (1)');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(153, 205, perfilesData[indexPerfil].retorno_anual);

    //Mejor año
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 210, 'Mejor año: (2)');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(151, 210, perfilesData[indexPerfil].retorno_mejor);

    //Peor año
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 215, 'Peor año: (2)');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(150, 215, perfilesData[indexPerfil].retorno_peor);

    //Firma
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 230, 'Firma:');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(100, 230, "_____________________________________");

    //Código de asesor
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 240, 'Código de asesor:');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(100, 240, sector);

    //Fecha
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 250, 'Fecha:');

    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    doc.text(100, 250, "_____________________________________");

    //(1)
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 265, '(1) Sobre la base de rentabilidades de largo plazo para las categorías de activo que componen los portafolios \nde cada perfil.');

    //(2)
    doc.setFont('Arial');
    doc.setFontType('normal');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 275, '(2) Sobre la base de un back test aplicado a los perfiles para los últimos años.');

    doc.save('sample-file.pdf');

}