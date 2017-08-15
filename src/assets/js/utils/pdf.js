var nombre = 'Ingrid';

$(function() {
    
     $('#cmd').click(function() {
         $('#pdf-cliente').text(nombre);

         
         var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAyCAMAAABCiTbWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFaoHFen6GQl2t0tnsfZHKxsjPwcPKRVmS9vf4gYKFsrrR4eXu0tbkbnympK7JXWqNqrbd6ertTGWtaHKKZnGLJUSc3d7iq7PLjJ7Td3yHc3mIK0ieHj6bq7jfJUKZmajWkKHU2NzoNU6V5ujtQ1eT3+HnOVGVRmCtOVeqhpnOP1qp1dnml6fWJEaooa7XsLzgo7HZ+Pn6usHWhIWEW3S7ZHzD1NXbTV6RYXm8v8TRYnOkRGG2ME6lVmWPU2uxdovFdovKYGyMz9bp9PT2IkCajJzN7/D0jqDTLkiXJEWnxc7o7u/xtbvOb3aJkqHNW3K1V3G8g4SE8vT38PL2foGFUGCQUWGQOVizXnW2UmqwusXlK0eYUGu7eY7Me3+GWGeO0NfuzdLhKEWYKEad5ObttcDhSl2RanOKOlWlPVqwnavTM0yWW2iN4eLlTWavw8znfoCGU2y0P1WTXXfA5ufqZW+LYm2MLU2lHDybPlSUYnrCVW63MEuXNFKpIkOhTl+QSWOvR1qSJkSZkJ/Mx8/mWXCzSWSx5ejwIkKfSV2WO1q0zM7TID+aIECagYmjfIWhgYOFqrDAMFCu9fb3NVKnrbbPdoCfJEOcIkGaxs7lGzyblqHCxs7mKUmjgI60+vr7doWwgJPJf4KF6+3zjZm7bHWJ8fHz8/T4eIWtLUugjJzLnafD4+fyVWidL1Cv7OzvX2+e+/z9y83UMlGo8vP3fYCGJUaiLk6ugJPOytLq+fn7cHeJbnWJKkaYmKC3UGiv297obXaJKUebnKvYVGOP2uDwN1ayI0KZkqPSk6TVlKTRcYW+x9DqxsvbcYbCcIbIkZy84ePo4+ToP12zaX/A/P39N0+W+/v8z9HWTGazQ1+vycvSzM/WboO99/j5PVin1tjd2tvf6+zvTGi5JEKa5+nwgJTOX2uN2dzizdXseY3Gg5XKn6nEhJbMsLbI7e/0uL3LK0qlgpPGME2hv8nm8PH18PH28vP1HT2bh5O1iZnJZ3/ETmiygIKFIUCa////+Om3OwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAfFSURBVHja5Jl5QJRFFMABD1gx8QByacWidUElNVHRFJS8qESkFrRILUzQ1jJQNJJCUDnq29pS8xM8SiW7TZOyiLKszC47LTusbAvtLjvsmNne++5j15a++KPd9wfMvDffN/PbN/PmzXwhD648tXTVaR70BIaETI05lTzXekinmxoo6Cuob3G6G1Mn6LQrggDdmdncuJ8GJXpBnMtGgxDdQtlosoQNQvSTVkuG3avTAx3dkpdQaSdxbPChW6yVmaGEPE+DDf2kxVa6P8pFTI5gQ78+3GZ2lDcR0sQGGXp9ha1ogSXKREgWDS70+lxrmr2gBZxO0tqIvrWmpuZJoQzFGo1ZUGErvcBzT3pRcw+iYau2s92g3K3RXdll26ZN3brUeB/eWV1Qanyi16emHQptZXJdgJ7bRvSx1dXVHYQyFKunqM2oElrpBZ7r4EXNPYiGsdrOhoByiIr73uKwpKUbN65Jqn7kAd3YvnhjWWISimzUoJ8s7JVfmpPAZAE5yWsjejoY1wtlbJi0V2VGldBKL/Dcei9q7kE0pGs7ux+U98vVvad98Jj01E2PLjtd3fr3w0t1RjW6xWG2lW0xs/n2f4O+CowrFZx02SVtQV/pCx0Nq7SdrVCNZO3hm9QPJt29XW67/Z0fNUYdOlMel8tmmdKcVtN/gk6/8oIeMl2QGKifECvHecKY6WrxE71bEtfd6OFnghx8HMvrRkaK1tUjOevlM8E4nDd+rUWfEG12FxJSQvOQvM1rXY8e85IefUQnQXpCfZBYuYcn7NlJLf6hT+HIb+izK3Y1yFudh7yI9SsE6853sDZt8IgeYIzt3PsMHFh/NXp9WkoJE0dcBXQJh55mGJ2eMUWHLkk21M9X1JEw29t7/wm9Zj72dCBWNnYKobTvJKEyGTve86k0By77HNlHKdEtZfasCTZCQhlaxKEvMYiOP+/8Yz7Rlc19EvqD3h+K7Nz3lNZrDiZvFmP7fWD+8iKF8aNPcHEckdGdLXEpZZZSQhop7cWhmy3G0Lvjn0UR7Y1+1Qko9tWYzxbJuR8me4fK+DOGmcEyOhOVk8UWQGgvEtFd+cbQuV5px/ZG3welxM2+BjX+hGLZizITdMUSOmMjrkrGCqnMAhGdhBtE/20RVTjEH/QZ/wL9UnShz3T1Qm8PvwmnkzkSOvuUq6mFRgFwqoSewRhD9xwbjRHlB//R592qkH7+oc+BzWq8T/SrceV5zb5EdMaaQqItFjMAz6ZCmCOhVQbRPaNwVb3dz290eo5CFvqFfhTnu6QedbssnOIVML+gG+ofCnQ2jpBKmp8DwNGUcz4udqvTILpnELfjbvYbXSkr/UJ/QrVOht8hi+Tf1bqhTpXRGWsORjUr4dELeXSMeAbRPR2x1L8dvf6EKh1I12bBqDhyKnS2mdvLKpA3jqE2l8DucBpFP3cYFvv4u9ZvU4h/a72HasJ/fgEvUmcfQ6GDbqg/yei2FEKiKJ2NuDnxNL6JJze1MkbRPXsx15qzsP0iPIY5aUo/fScv88TOMMxdrXtlTwmdwcy1kNJoDjiBMkKcI00JhtE932FWl9iv3fb1Z7xtbjPEzhZ6O/EudsPGw6NzXi4RI3slpXnCjHeVMobRPX2x8uf49kJPxmOPdnfLFjvbDnks+6rGOg7jA49egqQ2cT/PcNJyu+B2l40xjO4Zi7XJ7ZbIYpI+ebN+RvOlb6G0vIcuzaFzOXQnd1JzSLk7Sy1CUkNMT8UbRx8/TRV02+P4QvepdrDjkE+wQjaP622ckn3XANAcXs2hu2chJSvl7rDArWKMT6lgDKN7uib5ie7z0Jp9CvRfPsBXnzlCskV8iE4foGhJZ74vGo9ehinmuqH8odXBcTJimCOzGVplFtCJPYExjO5Ze59/6Nfeohbvhs80VxWv3cjdwnTvdM2OiIjFsZ0PTMf6IPHF3CXNaLDeE7EjtjOXaKy7W7iqCOcY3VIWZ3ZTJlV0u6uogDGM7nk5xi/0mJvV4t0Qor2g+obzO304ZE9y8rhF53CVYdKLLx4mWHsn7+GNj3UUL6jSOMZyyqc0QFsGQT9UdHtKGmsc3fM6bXMiq7yWVEm67lryyuKN6iZLRyou6XePXKq+lrxXupYs5RAhwlcKtL1gq68Q0SGVZ/xCL66trd0glKFYqzJ+/5dWpWyOsqFWL94NxaCcCP8nKp7elDimVhxh7Zjl29RD2yZba8cc7iJfRjdyhOBqh0lwdCalVXEiuqlJtdx9ot9VV1fXVShDsU5tHahVKZtzsbBOL94Nd+ElLPzvpnxdZMNDiQPWgIQtP6/hV+3YIhvqwtCYFPZQw7uKTxB82vo8pRYhgcWklrFukdxuzmf+D9/cJg1cCxK507s1Eo1DI9UfnnhfwzldPKgTO7j9ZJFLYo9uYQLzcyPP9yyUcsU5njGB0nIp0pGc6AJnAKO7YHfLFBPYnASMdHaZPSPeGbjoGOeYZpG1GX4INprI7BVuZwCiC85dAMU8aXnD+Y1mmmX2lNSqAEQXnAvHFtoizXFzPkyCkusUfl8SH7DoJljfzlJpN18AvwQzW17uxJXhDjh0Ma7j9nbILidxeH9TukXB3uoONPRwAW0W+Nkph7ZZBXiB00gU7M0FAYaeKaLhlyabTNoL57cjVMFOshwBg/63AAMA4i2Hicz8f7IAAAAASUVORK5CYII='
         var doc = new jsPDF()
         
         doc.addImage(imgData, 'PNG', 155, 21, 30, 6)

         doc.fromHTML($('.container').html(), 15, 15, {
             'width': 170,
             'elementHandlers': function() {
                 return true;
               }
         });

         /*
            var doc = new jsPDF();
            doc.setFont('Arial', 'regular');

*/
            /*
            var imgData = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNDQuOSAyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0LjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMyMTQwOUE7fQ0KCS5zdDF7ZmlsbDojODA4Mjg1O30NCjwvc3R5bGU+DQo8dGl0bGU+TG9nbyBJbnRlbGlnbyBTT0xPPC90aXRsZT4NCjxnPg0KCTxyZWN0IHg9IjQzLjQiIHk9IjcuMSIgY2xhc3M9InN0MCIgd2lkdGg9IjIuMSIgaGVpZ2h0PSIxNC40Ii8+DQoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI2MS4zLDIxLjUgNTIuNCwxMC42IDUyLjQsMTAuNiA1Mi40LDIxLjUgNTAuMiwyMS41IDUwLjIsNy4xIDUyLjQsNy4xIDYxLjIsMTguMSA2MS4zLDE4LjEgNjEuMyw3LjEgDQoJCTYzLjQsNy4xIDYzLjQsMjEuNSAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3Mi45LDkuMiA3Mi45LDIxLjUgNzAuNywyMS41IDcwLjcsOS4yIDY1LjUsOS4yIDY1LjUsNy4xIDc4LjEsNy4xIDc4LjEsOS4yIAkiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjgwLjIsMjEuNSA4MC4yLDcuMSA5MS4zLDcuMSA5MS4zLDkuMiA4Mi4zLDkuMiA4Mi4zLDEzLjEgODkuNiwxMy4xIDg5LjYsMTUuMSA4Mi4zLDE1LjEgODIuMywxOS41IA0KCQk5MS4zLDE5LjUgOTEuMywyMS41IAkiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9Ijk0LjcsMjEuNSA5NC43LDcuMSA5Ni44LDcuMSA5Ni44LDE5LjUgMTA0LjQsMTkuNSAxMDQuNCwyMS41IAkiLz4NCgk8cmVjdCB4PSIxMDYuOCIgeT0iNy4xIiBjbGFzcz0ic3QwIiB3aWR0aD0iMi4xIiBoZWlnaHQ9IjE0LjQiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIwLjIsMjEuOGMtMy45LDAtOC0yLjYtOC03LjVjMC00LjEsMy4zLTcuNSw4LTcuNWMyLjMsMCw0LjYsMC45LDYuMiwyLjZsLTEuNSwxLjVjLTEuMS0xLjMtMi44LTItNC41LTINCgkJYy0zLjksMC02LjEsMi41LTYuMSw1LjVjMCwyLjgsMi4zLDUuNCw2LDUuNGMyLjUsMCw0LjMtMS4yLDQuMy0yLjR2LTEuNkgxMjB2LTIuMWg2Ljd2My44QzEyNi43LDIwLjEsMTIzLjgsMjEuOCwxMjAuMiwyMS44Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzNy4xLDguOWMtMywwLjEtNS4zLDIuNy01LjIsNS43czIuNyw1LjMsNS43LDUuMmMyLjktMC4xLDUuMi0yLjUsNS4yLTUuNGMwLTMtMi41LTUuNS01LjYtNS40DQoJCUMxMzcuMiw4LjksMTM3LjEsOC45LDEzNy4xLDguOSBNMTM3LjEsMjEuOWMtNC4xLTAuMi03LjQtMy43LTcuMi03LjhjMC4yLTQuMSwzLjctNy40LDcuOC03LjJjNCwwLjIsNy4yLDMuNSw3LjIsNy41DQoJCWMwLDQuMS0zLjMsNy41LTcuNSw3LjVDMTM3LjMsMjEuOSwxMzcuMiwyMS45LDEzNy4xLDIxLjkiLz4NCgk8cmVjdCB4PSIwIiB5PSIwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMjguOSIgaGVpZ2h0PSIyOC45Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LjEsMy4zYzAsMC0xMi41LDEwLjQtMy4zLDI1LjZoNi40QzQsMTIuNSwxNC4xLDMuMywxNC4xLDMuMyBNMTguNiwwLjFjMCwwLTE2LjEsOS43LDIuMSwyOUgyOQ0KCQlDNi45LDExLjUsMTguNiwwLjEsMTguNiwwLjEgTTExLjUsNS40YzAsMC0xMi44LDEwLjEtOC41LDIzLjZoNUMwLjcsMTQuNiwxMS41LDUuNCwxMS41LDUuNCIvPg0KPC9nPg0KPC9zdmc+DQo="
            doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
            */

           doc.save('sample-file.pdf');
            /*
            html2canvas(document.getElementById('logo')), {
                onrendered: function(canvas) {
                    var img = 
                }
            }
            */
        });  
    });