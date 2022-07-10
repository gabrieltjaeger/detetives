const comandos = {"cima": "KeyW", "esquerda": "KeyA", "baixo": "KeyS", "direita": "KeyD"};
const quantidadeDados = 2;

let comodos = ["estudio", "hall", "living", "biblioteca", "sala-de-jantar", "sala-de-bilhar", "jardim-interior", "sala-de-baile", "cozinha"];
let personagens = ["escarlate", "ameixa", "mostarda", "pavao", "verde", "branco"]
window.tabuleiro = {
    '(1, 1)': 'parede', '(1, 2)': 'parede', '(1, 3)': 'parede', '(1, 4)': 'passagem', '(1, 5)': 'nada', '(1, 6)': 'ladrilho', '(1, 7)': 'nada', '(1, 8)': 'parede', '(1, 9)': 'parede', '(1, 10)': 'parede', '(1, 11)': 'nada', '(1, 12)': 'nada', '(1, 13)': 'parede', '(1, 14)': 'parede', '(1, 15)': 'parede', '(1, 16)': 'parede', '(1, 17)': 'parede', '(1, 18)': 'nada', '(1, 19)': 'ladrilho', '(1, 20)': 'nada', '(1, 21)': 'parede', '(1, 22)': 'parede', '(1, 23)': 'parede', '(1, 24)': 'parede', '(1, 25)': 'nada',
    '(2, 1)': 'parede', '(2, 2)': 'ladrilho-inv', '(2, 3)': 'ladrilho-inv', '(2, 4)': 'parede', '(2, 5)': 'ladrilho', '(2, 6)': 'ladrilho', '(2, 7)': 'parede', '(2, 8)': 'ladrilho-inv', '(2, 9)': 'ladrilho-inv', '(2, 10)': 'ladrilho-inv', '(2, 11)': 'parede', '(2, 12)': 'ladrilho', '(2, 13)': 'porta', '(2, 14)': 'ladrilho-inv', '(2, 15)': 'ladrilho-inv', '(2, 16)': 'ladrilho-inv', '(2, 17)': 'parede', '(2, 18)': 'ladrilho', '(2, 19)': 'ladrilho', '(2, 20)': 'parede', '(2, 21)': 'ladrilho-inv', '(2, 22)': 'ladrilho-inv', '(2, 23)': 'ladrilho-inv', '(2, 24)': 'parede', '(2, 25)': 'nada',
    '(3, 1)': 'parede', '(3, 2)': 'ladrilho-inv', '(3, 3)': 'ladrilho-inv', '(3, 4)': 'parede', '(3, 5)': 'ladrilho', '(3, 6)': 'ladrilho', '(3, 7)': 'parede', '(3, 8)': 'ladrilho-inv', '(3, 9)': 'ladrilho-inv', '(3, 10)': 'ladrilho-inv', '(3, 11)': 'parede', '(3, 12)': 'ladrilho', '(3, 13)': 'parede', '(3, 14)': 'ladrilho-inv', '(3, 15)': 'ladrilho-inv', '(3, 16)': 'ladrilho-inv', '(3, 17)': 'parede', '(3, 18)': 'ladrilho', '(3, 19)': 'ladrilho', '(3, 20)': 'parede', '(3, 21)': 'ladrilho-inv', '(3, 22)': 'ladrilho-inv', '(3, 23)': 'ladrilho-inv', '(3, 24)': 'parede', '(3, 25)': 'nada',
    '(4, 1)': 'parede', '(4, 2)': 'ladrilho-inv', '(4, 3)': 'ladrilho-inv', '(4, 4)': 'parede', '(4, 5)': 'ladrilho', '(4, 6)': 'ladrilho', '(4, 7)': 'parede', '(4, 8)': 'ladrilho-inv', '(4, 9)': 'ladrilho-inv', '(4, 10)': 'ladrilho-inv', '(4, 11)': 'porta', '(4, 12)': 'ladrilho', '(4, 13)': 'parede', '(4, 14)': 'ladrilho-inv', '(4, 15)': 'ladrilho-inv', '(4, 16)': 'ladrilho-inv', '(4, 17)': 'parede', '(4, 18)': 'ladrilho', '(4, 19)': 'ladrilho', '(4, 20)': 'parede', '(4, 21)': 'ladrilho-inv', '(4, 22)': 'ladrilho-inv', '(4, 23)': 'ladrilho-inv', '(4, 24)': 'parede', '(4, 25)': 'nada',
    '(5, 1)': 'parede', '(5, 2)': 'ladrilho-inv', '(5, 3)': 'ladrilho-inv', '(5, 4)': 'parede', '(5, 5)': 'ladrilho', '(5, 6)': 'ladrilho', '(5, 7)': 'parede', '(5, 8)': 'ladrilho-inv', '(5, 9)': 'ladrilho-inv', '(5, 10)': 'ladrilho-inv', '(5, 11)': 'parede', '(5, 12)': 'ladrilho', '(5, 13)': 'parede', '(5, 14)': 'ladrilho-inv', '(5, 15)': 'ladrilho-inv', '(5, 16)': 'ladrilho-inv', '(5, 17)': 'parede', '(5, 18)': 'ladrilho', '(5, 19)': 'ladrilho', '(5, 20)': 'porta', '(5, 21)': 'ladrilho-inv', '(5, 22)': 'ladrilho-inv', '(5, 23)': 'ladrilho-inv', '(5, 24)': 'parede', '(5, 25)': 'nada',
    '(6, 1)': 'parede', '(6, 2)': 'ladrilho-inv', '(6, 3)': 'ladrilho-inv', '(6, 4)': 'parede', '(6, 5)': 'ladrilho', '(6, 6)': 'ladrilho', '(6, 7)': 'parede', '(6, 8)': 'ladrilho-inv', '(6, 9)': 'ladrilho-inv', '(6, 10)': 'ladrilho-inv', '(6, 11)': 'parede', '(6, 12)': 'ladrilho', '(6, 13)': 'parede', '(6, 14)': 'parede', '(6, 15)': 'parede', '(6, 16)': 'porta', '(6, 17)': 'parede', '(6, 18)': 'ladrilho', '(6, 19)': 'ladrilho', '(6, 20)': 'ladrilho', '(6, 21)': 'parede', '(6, 22)': 'parede', '(6, 23)': 'parede', '(6, 24)': 'parede', '(6, 25)': 'nada',
    '(7, 1)': 'nada', '(7, 2)': 'parede', '(7, 3)': 'parede', '(7, 4)': 'porta', '(7, 5)': 'ladrilho', '(7, 6)': 'ladrilho', '(7, 7)': 'ladrilho', '(7, 8)': 'parede', '(7, 9)': 'porta', '(7, 10)': 'parede', '(7, 11)': 'ladrilho', '(7, 12)': 'ladrilho', '(7, 13)': 'ladrilho', '(7, 14)': 'ladrilho', '(7, 15)': 'ladrilho', '(7, 16)': 'ladrilho', '(7, 17)': 'ladrilho', '(7, 18)': 'ladrilho', '(7, 19)': 'ladrilho', '(7, 20)': 'ladrilho', '(7, 21)': 'ladrilho', '(7, 22)': 'ladrilho', '(7, 23)': 'ladrilho', '(7, 24)': 'nada', '(7, 25)': 'nada',
    '(8, 1)': 'ladrilho', '(8, 2)': 'ladrilho', '(8, 3)': 'ladrilho', '(8, 4)': 'ladrilho', '(8, 5)': 'ladrilho', '(8, 6)': 'ladrilho', '(8, 7)': 'ladrilho', '(8, 8)': 'ladrilho', '(8, 9)': 'ladrilho', '(8, 10)': 'ladrilho', '(8, 11)': 'ladrilho', '(8, 12)': 'ladrilho', '(8, 13)': 'ladrilho', '(8, 14)': 'ladrilho', '(8, 15)': 'ladrilho', '(8, 16)': 'ladrilho', '(8, 17)': 'ladrilho', '(8, 18)': 'ladrilho', '(8, 19)': 'ladrilho', '(8, 20)': 'ladrilho', '(8, 21)': 'ladrilho', '(8, 22)': 'ladrilho', '(8, 23)': 'ladrilho', '(8, 24)': 'ladrilho', '(8, 25)': 'nada',
    '(9, 1)': 'nada', '(9, 2)': 'ladrilho', '(9, 3)': 'ladrilho', '(9, 4)': 'ladrilho', '(9, 5)': 'ladrilho', '(9, 6)': 'ladrilho', '(9, 7)': 'ladrilho', '(9, 8)': 'ladrilho', '(9, 9)': 'ladrilho', '(9, 10)': 'ladrilho', '(9, 11)': 'ladrilho', '(9, 12)': 'ladrilho', '(9, 13)': 'ladrilho', '(9, 14)': 'ladrilho', '(9, 15)': 'ladrilho', '(9, 16)': 'ladrilho', '(9, 17)': 'ladrilho', '(9, 18)': 'parede', '(9, 19)': 'parede', '(9, 20)': 'porta', '(9, 21)': 'parede', '(9, 22)': 'parede', '(9, 23)': 'parede', '(9, 24)': 'ladrilho', '(9, 25)': 'nada',
    '(10, 1)': 'nada', '(10, 2)': 'parede', '(10, 3)': 'parede', '(10, 4)': 'parede', '(10, 5)': 'porta', '(10, 6)': 'parede', '(10, 7)': 'parede', '(10, 8)': 'ladrilho', '(10, 9)': 'nada', '(10, 10)': 'nada', '(10, 11)': 'nada', '(10, 12)': 'nada', '(10, 13)': 'nada', '(10, 14)': 'nada', '(10, 15)': 'nada', '(10, 16)': 'ladrilho', '(10, 17)': 'ladrilho', '(10, 18)': 'porta', '(10, 19)': 'ladrilho-inv', '(10, 20)': 'ladrilho-inv', '(10, 21)': 'ladrilho-inv', '(10, 22)': 'ladrilho-inv', '(10, 23)': 'parede', '(10, 24)': 'ladrilho', '(10, 25)': 'ladrilho',
    '(11, 1)': 'parede', '(11, 2)': 'ladrilho-inv', '(11, 3)': 'ladrilho-inv', '(11, 4)': 'ladrilho-inv', '(11, 5)': 'ladrilho-inv', '(11, 6)': 'ladrilho-inv', '(11, 7)': 'parede', '(11, 8)': 'ladrilho', '(11, 9)': 'nada', '(11, 10)': 'nada', '(11, 11)': 'nada', '(11, 12)': 'nada', '(11, 13)': 'nada', '(11, 14)': 'nada', '(11, 15)': 'nada', '(11, 16)': 'ladrilho', '(11, 17)': 'ladrilho', '(11, 18)': 'parede', '(11, 19)': 'ladrilho-inv', '(11, 20)': 'ladrilho-inv', '(11, 21)': 'ladrilho-inv', '(11, 22)': 'ladrilho-inv', '(11, 23)': 'parede', '(11, 24)': 'parede', '(11, 25)': 'parede',
    '(12, 1)': 'parede', '(12, 2)': 'ladrilho-inv', '(12, 3)': 'ladrilho-inv', '(12, 4)': 'ladrilho-inv', '(12, 5)': 'ladrilho-inv', '(12, 6)': 'ladrilho-inv', '(12, 7)': 'porta', '(12, 8)': 'ladrilho', '(12, 9)': 'nada', '(12, 10)': 'nada', '(12, 11)': 'nada', '(12, 12)': 'nada', '(12, 13)': 'nada', '(12, 14)': 'nada', '(12, 15)': 'nada', '(12, 16)': 'ladrilho', '(12, 17)': 'ladrilho', '(12, 18)': 'parede', '(12, 19)': 'ladrilho-inv', '(12, 20)': 'ladrilho-inv', '(12, 21)': 'ladrilho-inv', '(12, 22)': 'ladrilho-inv', '(12, 23)': 'ladrilho-inv', '(12, 24)': 'ladrilho-inv', '(12, 25)': 'parede',
    '(13, 1)': 'parede', '(13, 2)': 'ladrilho-inv', '(13, 3)': 'ladrilho-inv', '(13, 4)': 'ladrilho-inv', '(13, 5)': 'ladrilho-inv', '(13, 6)': 'ladrilho-inv', '(13, 7)': 'porta', '(13, 8)': 'ladrilho', '(13, 9)': 'nada', '(13, 10)': 'nada', '(13, 11)': 'nada', '(13, 12)': 'nada', '(13, 13)': 'nada', '(13, 14)': 'nada', '(13, 15)': 'nada', '(13, 16)': 'ladrilho', '(13, 17)': 'ladrilho', '(13, 18)': 'parede', '(13, 19)': 'ladrilho-inv', '(13, 20)': 'ladrilho-inv', '(13, 21)': 'ladrilho-inv', '(13, 22)': 'ladrilho-inv', '(13, 23)': 'ladrilho-inv', '(13, 24)': 'ladrilho-inv', '(13, 25)': 'parede',
    '(14, 1)': 'parede', '(14, 2)': 'ladrilho-inv', '(14, 3)': 'ladrilho-inv', '(14, 4)': 'ladrilho-inv', '(14, 5)': 'ladrilho-inv', '(14, 6)': 'ladrilho-inv', '(14, 7)': 'parede', '(14, 8)': 'ladrilho', '(14, 9)': 'nada', '(14, 10)': 'nada', '(14, 11)': 'nada', '(14, 12)': 'nada', '(14, 13)': 'nada', '(14, 14)': 'nada', '(14, 15)': 'nada', '(14, 16)': 'ladrilho', '(14, 17)': 'ladrilho', '(14, 18)': 'parede', '(14, 19)': 'ladrilho-inv', '(14, 20)': 'ladrilho-inv', '(14, 21)': 'ladrilho-inv', '(14, 22)': 'ladrilho-inv', '(14, 23)': 'parede', '(14, 24)': 'parede', '(14, 25)': 'parede',
    '(15, 1)': 'nada', '(15, 2)': 'parede', '(15, 3)': 'parede', '(15, 4)': 'parede', '(15, 5)': 'parede', '(15, 6)': 'parede', '(15, 7)': 'parede', '(15, 8)': 'ladrilho', '(15, 9)': 'ladrilho', '(15, 10)': 'ladrilho', '(15, 11)': 'ladrilho', '(15, 12)': 'ladrilho', '(15, 13)': 'ladrilho', '(15, 14)': 'ladrilho', '(15, 15)': 'ladrilho', '(15, 16)': 'ladrilho', '(15, 17)': 'ladrilho', '(15, 18)': 'porta', '(15, 19)': 'ladrilho-inv', '(15, 20)': 'ladrilho-inv', '(15, 21)': 'ladrilho-inv', '(15, 22)': 'ladrilho-inv', '(15, 23)': 'parede', '(15, 24)': 'ladrilho', '(15, 25)': 'ladrilho',
    '(16, 1)': 'nada', '(16, 2)': 'ladrilho', '(16, 3)': 'ladrilho', '(16, 4)': 'ladrilho', '(16, 5)': 'ladrilho', '(16, 6)': 'ladrilho', '(16, 7)': 'ladrilho', '(16, 8)': 'ladrilho', '(16, 9)': 'ladrilho', '(16, 10)': 'ladrilho', '(16, 11)': 'ladrilho', '(16, 12)': 'ladrilho', '(16, 13)': 'ladrilho', '(16, 14)': 'ladrilho', '(16, 15)': 'ladrilho', '(16, 16)': 'ladrilho', '(16, 17)': 'ladrilho', '(16, 18)': 'parede', '(16, 19)': 'parede', '(16, 20)': 'porta', '(16, 21)': 'parede', '(16, 22)': 'parede', '(16, 23)': 'parede', '(16, 24)': 'ladrilho', '(16, 25)': 'nada',
    '(17, 1)': 'ladrilho', '(17, 2)': 'ladrilho', '(17, 3)': 'ladrilho', '(17, 4)': 'ladrilho', '(17, 5)': 'ladrilho', '(17, 6)': 'ladrilho', '(17, 7)': 'ladrilho', '(17, 8)': 'ladrilho', '(17, 9)': 'ladrilho', '(17, 10)': 'parede', '(17, 11)': 'parede', '(17, 12)': 'parede', '(17, 13)': 'porta', '(17, 14)': 'parede', '(17, 15)': 'parede', '(17, 16)': 'ladrilho', '(17, 17)': 'ladrilho', '(17, 18)': 'ladrilho', '(17, 19)': 'ladrilho', '(17, 20)': 'ladrilho', '(17, 21)': 'ladrilho', '(17, 22)': 'ladrilho', '(17, 23)': 'ladrilho', '(17, 24)': 'ladrilho', '(17, 25)': 'nada',
    '(18, 1)': 'nada', '(18, 2)': 'parede', '(18, 3)': 'parede', '(18, 4)': 'parede', '(18, 5)': 'parede', '(18, 6)': 'porta', '(18, 7)': 'ladrilho', '(18, 8)': 'ladrilho', '(18, 9)': 'ladrilho', '(18, 10)': 'porta', '(18, 11)': 'ladrilho-inv', '(18, 12)': 'ladrilho-inv', '(18, 13)': 'ladrilho-inv', '(18, 14)': 'ladrilho-inv', '(18, 15)': 'parede', '(18, 16)': 'ladrilho', '(18, 17)': 'ladrilho', '(18, 18)': 'ladrilho', '(18, 19)': 'ladrilho', '(18, 20)': 'ladrilho', '(18, 21)': 'ladrilho', '(18, 22)': 'ladrilho', '(18, 23)': 'ladrilho', '(18, 24)': 'nada', '(18, 25)': 'nada',
    '(19, 1)': 'parede', '(19, 2)': 'ladrilho-inv', '(19, 3)': 'ladrilho-inv', '(19, 4)': 'ladrilho-inv', '(19, 5)': 'ladrilho-inv', '(19, 6)': 'parede', '(19, 7)': 'ladrilho', '(19, 8)': 'ladrilho', '(19, 9)': 'ladrilho', '(19, 10)': 'parede', '(19, 11)': 'ladrilho-inv', '(19, 12)': 'ladrilho-inv', '(19, 13)': 'ladrilho-inv', '(19, 14)': 'ladrilho-inv', '(19, 15)': 'parede', '(19, 16)': 'ladrilho', '(19, 17)': 'ladrilho', '(19, 18)': 'ladrilho', '(19, 19)': 'parede', '(19, 20)': 'parede', '(19, 21)': 'parede', '(19, 22)': 'parede', '(19, 23)': 'parede', '(19, 24)': 'passagem', '(19, 25)': 'nada',
    '(20, 1)': 'parede', '(20, 2)': 'ladrilho-inv', '(20, 3)': 'ladrilho-inv', '(20, 4)': 'ladrilho-inv', '(20, 5)': 'ladrilho-inv', '(20, 6)': 'parede', '(20, 7)': 'ladrilho', '(20, 8)': 'ladrilho', '(20, 9)': 'ladrilho', '(20, 10)': 'parede', '(20, 11)': 'ladrilho-inv', '(20, 12)': 'ladrilho-inv', '(20, 13)': 'ladrilho-inv', '(20, 14)': 'ladrilho-inv', '(20, 15)': 'parede', '(20, 16)': 'parede', '(20, 17)': 'ladrilho', '(20, 18)': 'ladrilho', '(20, 19)': 'porta', '(20, 20)': 'ladrilho-inv', '(20, 21)': 'ladrilho-inv', '(20, 22)': 'ladrilho-inv', '(20, 23)': 'ladrilho-inv', '(20, 24)': 'parede', '(20, 25)': 'nada',
    '(21, 1)': 'parede', '(21, 2)': 'ladrilho-inv', '(21, 3)': 'ladrilho-inv', '(21, 4)': 'ladrilho-inv', '(21, 5)': 'ladrilho-inv', '(21, 6)': 'parede', '(21, 7)': 'ladrilho', '(21, 8)': 'ladrilho', '(21, 9)': 'ladrilho', '(21, 10)': 'parede', '(21, 11)': 'ladrilho-inv', '(21, 12)': 'ladrilho-inv', '(21, 13)': 'ladrilho-inv', '(21, 14)': 'ladrilho-inv', '(21, 15)': 'ladrilho-inv', '(21, 16)': 'parede', '(21, 17)': 'ladrilho', '(21, 18)': 'ladrilho', '(21, 19)': 'parede', '(21, 20)': 'ladrilho-inv', '(21, 21)': 'ladrilho-inv', '(21, 22)': 'ladrilho-inv', '(21, 23)': 'ladrilho-inv', '(21, 24)': 'parede', '(21, 25)': 'nada',
    '(22, 1)': 'parede', '(22, 2)': 'ladrilho-inv', '(22, 3)': 'ladrilho-inv', '(22, 4)': 'ladrilho-inv', '(22, 5)': 'ladrilho-inv', '(22, 6)': 'parede', '(22, 7)': 'ladrilho', '(22, 8)': 'ladrilho', '(22, 9)': 'ladrilho', '(22, 10)': 'parede', '(22, 11)': 'ladrilho-inv', '(22, 12)': 'ladrilho-inv', '(22, 13)': 'ladrilho-inv', '(22, 14)': 'ladrilho-inv', '(22, 15)': 'ladrilho-inv', '(22, 16)': 'parede', '(22, 17)': 'ladrilho', '(22, 18)': 'ladrilho', '(22, 19)': 'parede', '(22, 20)': 'ladrilho-inv', '(22, 21)': 'ladrilho-inv', '(22, 22)': 'ladrilho-inv', '(22, 23)': 'ladrilho-inv', '(22, 24)': 'parede', '(22, 25)': 'nada',
    '(23, 1)': 'parede', '(23, 2)': 'ladrilho-inv', '(23, 3)': 'ladrilho-inv', '(23, 4)': 'ladrilho-inv', '(23, 5)': 'ladrilho-inv', '(23, 6)': 'parede', '(23, 7)': 'ladrilho', '(23, 8)': 'ladrilho', '(23, 9)': 'ladrilho', '(23, 10)': 'parede', '(23, 11)': 'ladrilho-inv', '(23, 12)': 'ladrilho-inv', '(23, 13)': 'ladrilho-inv', '(23, 14)': 'ladrilho-inv', '(23, 15)': 'ladrilho-inv', '(23, 16)': 'parede', '(23, 17)': 'ladrilho', '(23, 18)': 'ladrilho', '(23, 19)': 'parede', '(23, 20)': 'ladrilho-inv', '(23, 21)': 'ladrilho-inv', '(23, 22)': 'ladrilho-inv', '(23, 23)': 'ladrilho-inv', '(23, 24)': 'parede', '(23, 25)': 'nada',
    '(24, 1)': 'parede', '(24, 2)': 'parede', '(24, 3)': 'parede', '(24, 4)': 'parede', '(24, 5)': 'parede', '(24, 6)': 'parede', '(24, 7)': 'nada', '(24, 8)': 'ladrilho', '(24, 9)': 'nada', '(24, 10)': 'parede', '(24, 11)': 'parede', '(24, 12)': 'parede', '(24, 13)': 'parede', '(24, 14)': 'parede', '(24, 15)': 'parede', '(24, 16)': 'parede', '(24, 17)': 'nada', '(24, 18)': 'ladrilho', '(24, 19)': 'nada', '(24, 20)': 'parede', '(24, 21)': 'parede', '(24, 22)': 'parede', '(24, 23)': 'parede', '(24, 24)': 'parede', '(24, 25)': 'nada'
}
window.cont = 0;
window.jogador = document.getElementById("jogador");
window.personagemAJogar = "";
window.movimentos = 0;

function dado() {
    return Math.floor(Math.random() * 6) + 1;
}

function personagemQueVaiJogar() {
    let personagemAJogar = personagens[dado() - 1];
    console.log(personagemAJogar);
    return document.getElementsByClassName(personagemAJogar)[0];
}

function setPosition(objeto, x, y) {
    objeto.style.gridColumn = x + "/" + x;
    objeto.style.gridRow = y + "/" + y;
    return true;
}

function atualizarJogador() {
    window.jogador.innerHTML = `Jogador: ${window.personagemAJogar.innerHTML}\n Movimentos: ${window.movimentos}`;
}

function getPosition(objeto) {
    let x = objeto.style.gridColumn;
    let y = objeto.style.gridRow;
    x = parseInt(x.split("/")[0]);
    y = parseInt(y.split("/")[0]);
    return [x, y];
}

function movePersonagem(direcao) {
    let posicao = getPosition(window.personagemAJogar);
    let x = posicao[0];
    let y = posicao[1];
    switch (direcao) {
        case "cima":
            y--;
            break;
        case "baixo":
            y++;
            break;
        case "esquerda":
            x--;
            break;
        case "direita":
            x++;
            break;
    }
    let chao = window.tabuleiro[`(${x}, ${y})`]
    console.log(chao);
    if (chao == "parede") {
        return false;
    }
    else if (chao == "nada") {
        return false;
    }
    else if (chao == undefined) {
        return false;
    }
    else {
        if (window.movimentos > 0) {
            if (chao == "ladrilho-inv") {
                setPosition(window.personagemAJogar, x, y);
                return true;
            }
            else {
                window.movimentos--;
                console.log(window.movimentos);
                atualizarJogador();
                setPosition(window.personagemAJogar, x, y);
                return true;
            }
        }
        else {
            window.personagemAJogar = personagemQueVaiJogar();
            window.movimentos = jogarDados(quantidadeDados);
            atualizarJogador();
            return false;
        }
    }
}

function jogarDados(quantidadeDados) {
    let soma = 0;
    for (let i = 0; i < quantidadeDados; i++) {
        soma += dado();
    }
    console.log(soma);
    return soma;
}

console.log("Aperte \"enter\" para jogar");
document.addEventListener("keydown", function (event) {
    if (window.cont == 0){
        if (event.code == "Enter"){
            window.cont = 1;
            window.personagemAJogar = personagemQueVaiJogar();
            window.movimentos = jogarDados(quantidadeDados);
            atualizarJogador();
        }
        else{
            return;
        }
    }
    else if (window.cont == 1){
        if (event.code == comandos["cima"]) {
            movePersonagem("cima");
        }
        else if (event.code == comandos["esquerda"]) {
            movePersonagem("esquerda");
        }
        else if (event.code == comandos["baixo"]) {
            movePersonagem("baixo");
        }
        else if (event.code == comandos["direita"]) {
            movePersonagem("direita");
        }
        else {
            return;
        }
    }
}, false);

comodos.forEach(comodo => {
    switch (comodo) {
        case "estudio":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('estudio')[0]);
            break;
        case "hall":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('hall')[0]);
            break;
        case "living":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('living')[0]);
            break;
        case "biblioteca":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('biblioteca')[0]);
            break;
        case "sala-de-jantar":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('sala-de-jantar')[0]);
            break;
        case "sala-de-bilhar":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('sala-de-bilhar')[0]);
            break;
        case "jardim-interior":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('jardim-interior')[0]);
            break;
        case "sala-de-baile":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('sala-de-baile')[0]);
            break;
        case "cozinha":
            document.getElementById('tabuleiro').appendChild(document.getElementsByClassName('cozinha')[0]);
            break;
        default:
            break;
    }
});

for (let i = 1; i <= 25; i++) {
    for (let j = 1; j <= 25; j++) {
        let coordenada = tabuleiro[`(${i}, ${j})`]
        switch (coordenada) {
            case "parede":
                let parede = document.createElement('div');
                parede.classList.add('parede');
                setPosition(parede, i, j);
                document.getElementById('tabuleiro').appendChild(parede);
                break;
            case "ladrilho":
                let ladrilho = document.createElement('div');
                ladrilho.classList.add('ladrilho');
                setPosition(ladrilho, i, j);
                document.getElementById('tabuleiro').appendChild(ladrilho);
                break;
            case "porta":
                let porta = document.createElement('div');
                porta.classList.add('porta');
                setPosition(porta, i, j);
                document.getElementById('tabuleiro').appendChild(porta);
                break;
            case "nada":
                let nada = document.createElement('div');
                nada.classList.add('nada');
                setPosition(nada, i, j);
                document.getElementById('tabuleiro').appendChild(nada);
                break;
            default:
                break;
        }
    }
}

let atualizarCoordenadas = [[9, 24], [10, 24], [15, 24], [16, 24], [9, 25], [10, 25], [15, 25], [16, 25]];
atualizarCoordenadas.forEach(coordenada => {
    let x = coordenada[0];
    let y = coordenada[1];
    coordenada = tabuleiro[`(${x}, ${y})`]
        switch (coordenada) {
            case "parede":
                let parede = document.createElement('div');
                parede.classList.add('parede');
                setPosition(parede, x, y);
                document.getElementById('tabuleiro').appendChild(parede);
                break;
            case "ladrilho":
                let ladrilho = document.createElement('div');
                ladrilho.classList.add('ladrilho');
                setPosition(ladrilho, x, y);
                document.getElementById('tabuleiro').appendChild(ladrilho);
                break;
            default:
                break;
        }
}
);

personagens.forEach(personagem => {
    switch (personagem) {
        case "escarlate":
            setPosition(document.getElementsByClassName(personagem)[0], 17, 1);
            break;
        case "ameixa":
            setPosition(document.getElementsByClassName(personagem)[0], 1, 6);
            break;
        case "mostarda":
            setPosition(document.getElementsByClassName(personagem)[0], 24, 8);
            break;
        case "pavao":
            setPosition(document.getElementsByClassName(personagem)[0], 1, 19);
            break;
        case "verde":
            setPosition(document.getElementsByClassName(personagem)[0], 10, 25);
            break;
        case "branco":
            setPosition(document.getElementsByClassName(personagem)[0], 15, 25);
            break;
        default:
            break;
    }
});
