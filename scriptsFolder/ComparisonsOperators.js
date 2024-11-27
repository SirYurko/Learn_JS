// 5 > 4 true
// "ананас" > "яблуко" false
// "2" > "12" false          // true У JavaScript порівняння рядків базується на лексикографічному порядку (як у словнику),
                                //    а не на числовому значенні. Тому "2" > "12" повертає true, бо '2' має більший Unicode-код, ніж '1'.
// undefined == null  true 
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false