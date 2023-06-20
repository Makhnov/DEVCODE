<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Exo Nico</title>

    <meta name="author" content="Nico M">
    <meta name="description" content="TP#_LANGAGE">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="./js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/x-icon" href="../divers/img/favphp.ico">

</head>

<body>

    <h1>PHP</h1>

    <?php
        $br = '<br>';
        $brr = '<br> <br>';
        $s = ' ';
        $variable = '<p style=color:red;>Hello World !</p>';
        echo 'Hello World !'.$variable;

        $entier = 5;
        echo $entier.$s.gettype($entier).$br;

        $prenom = 'Charles';
        echo $prenom.$s.gettype($prenom).$br;

        $bool = false;
        if($bool){
            echo '<span style=color:green;>true</span>';
        }else{
            echo '<span style=color:red;>false</span>';
        }
        echo $s.gettype($bool).$brr;

        $a = 12;
        $b = 10;
        $total = $a + $b;
        echo 'Total (a+b)='.$total.$br;

        $a = 5;
        $b = 3;
        $c = $a + $a;
        echo 'a :'.$a.$br.'b :'.$b.$br.'c (a+b):'.$c.$br;

        $a = 2;
        $c = $b - $a;
        echo 'a :'.$a.$br.'b :'.$b.$br.'c (b-a):'.$c.$br;

        $a = 15;
        $b = 23;
        echo 'a :'.$a.$br.'b :'.$b.$br;

        $temp = $a;
        $a = $b;
        $b = $temp;
        echo 'a :'.$a.$br.'b :'.$b.$brr;


        function prompt($prompt1, $prompt2, $prompt3) {
            echo("<script type='text/javascript'> let prixHT = prompt('".$prompt1."'); </script>");
            echo("<script type='text/javascript'> let items = prompt('".$prompt2."'); </script>");
            echo("<script type='text/javascript'> let TVA = prompt('".$prompt3."'); </script>");
       
           $resultat = "<script type='text/javascript'> document.write((parseInt(items) * parseInt(prixHT)) + (parseInt(TVA) * (parseInt(items) * parseInt(prixHT)) / 100)); </script>";

            return($resultat);
        }
        
        $prompt1 = 'Entrez un prix HT';
        
        $prompt2 = 'Entrez le nombre darticles';

        $prompt3 = 'Entrez la TVA (en %)';

        //$resultat = prompt($prompt1, $prompt2, $prompt3);
        //echo 'Le cout total est de :'.$resultat.$brr;

        function soustraction($a, $b) {
            return($a - $b);
        }

        echo '17 - 11  ='.$s.soustraction(17, 11).$br;

        function arrondi($a) {
            return(round($a, 0, PHP_ROUND_HALF_UP));
        }

        echo '17.11 arrondi ='.$s.arrondi(17.11).$br;

        function somme($a, $b, $c) {
            return($a + $b + $c);
        }

        echo '17 + 11 + 22 ='.$s.somme(17, 11, 22).$br;
        
        function moyenne(...$nombres){
                $sum = 0;
                foreach($nombres as $nb){
                    $sum += $nb;
                }
            return(($sum)/func_num_args());
        }
        
        echo 'La moyenne des nombres est de :'.$s.moyenne(17, 11, 16, 18, 19, 24).$brr;

        function positif($a) {
            if ($a >= 0) {
                return($a.' est positif');
            } else {
                return($a.' est négatif');
            }
        }

        echo positif(11).$br;

        function maximum(...$nombres){
            $max = func_get_arg(1);
            foreach($nombres as $nb) {
                if ($nb > $max) $max = $nb;
            }

        return($max);
        }

        echo 'Le plus grand nombre saisi est :'.$s.maximum(17, 11, 22, 44, 58, 79, 87, 10).$br;

        function minimum(...$nombres){
            $min = func_get_arg(1);
            foreach($nombres as $nb) {
                if ($nb < $min) $min = $nb;
            }

        return($min);
        }

        echo 'Le plus petit nombre saisi est :'.$s.minimum(17, 11, 22, 44, 58, 79, 87, 10).$br;

        function maxTab($tab) {

            $max = $tab[0];
            foreach($tab as $nb) {
                if ($nb > $max) $max = $nb;
            }
            return($max);   
        }

        echo 'Le plus grand nombre saisi dans ce tableau est :'.$s.maxTab([17, 11, 22, 44, 58, 79, 87, 10]).$br;
        
        function moyTab($tab) {

            $sum = 0;
            foreach($tab as $nb) {
                $sum += $nb;
            }

            return($sum / count($tab));   
        }

        echo 'La moyenne des éléments saisis dans ce tableau est :'.$s.moyTab([17, 11, 22, 44, 58, 79, 87, 10]).$brr;

        function grade($note) {

            $note = floor($note);
            switch ($note) {
                case in_array($note, range(18, 20)):
                    return "A";
                    break;
                case in_array($note, range(14, 18)):
                    return "B";
                    break;
                case in_array($note, range(10, 14)):
                    return "C";
                    break;
                case in_array($note, range(0, 10)):
                    return "D";
                    break;
                default:
                    return "Entrez un entier entre 0 et 20";
                    break;
            }
        }

        echo grade(17.5).$br;

        function multiple37($nb) {
            if ((($nb % 3)  == 0) && (($nb % 7) == 0)) {
                return 'est';
            } else {
                return 'n\'est pas';
            }
        }

        $nb = 42;
        echo 'Le nombre'.$s.$nb.$s.multiple37($nb).$s.'un multiple de 3 ET de 7'.$br;

        function calcul($operation, $nb1, $nb2) {

            switch ($operation) {
                case 'x': 
                case 'X':
                case '*':
                    return ($nb1 * $nb2);
                    break;
                case '/':
                case '÷':
                case 'd':
                case 'D':
                    return ($nb1 / $nb2);
                    break;
                case 'p':
                case 'P':
                case '+':
                    return ($nb1 + $nb2);
                    break;
                case 'm':
                case 'M':
                case '-':
                    return ($nb1 - $nb2);
                    break;
                default:
                    return "Valeurs incorrectes";
                    break;
            }
        }

        $nb1 = 10;
        $nb2 = 24;
        $operation = 'D';
        echo 'Le résultat de l\'opération est de'.$s.calcul($operation, $nb1, $nb2).$brr;

        $nbmin = 100;
        $nbmax = 1000;
        $random = rand($nbmin, $nbmax);
        $trouve = true;
        $iter = 0;

        echo 'Le nombre mystère est : <span style=color:green;>'.$s.$random.$br.'</span>';

        echo 'Tentatives :'.$s;
        while ($trouve) {
            $iter++;
            $nbtest = rand($nbmin, $nbmax);
            echo $nbtest.','.$s;
            if ($nbtest == $random) {
                $trouve = false;
            } else if ($nbtest > $random) {
                $nbmax = $nbtest - 1;
            } else {
                $nbmin = $nbtest + 1;
            }
        }

        echo $br.'Il m\'a fallu'.$s.$iter.$s.'essais pour trouver le nombre !'.$brr;

        function multiplesInf($nb1, $nb2) {
            if ($nb1 > $nb2) {
                $i = 0;
                $nb3 = 'Les multiples de '.$nb2.' infèrieurs à '.$nb1.' sont :0';
                do {
                    $i++;
                    echo $nb3.', ';
                    $nb3 = $nb2 * $i;
                } while ($nb3 < $nb1);
            } else {
                return 'Le premier nombre doit être plus grand que le second !';
            }
            return;
        }

        echo multiplesInf(100, 8).$brr;

        function estPremier($nb) {
            for ($i = 2; $i < ($nb / 2); $i++) {
                if ($nb % $i == 0) {
                    return $nb.' n\'est pas un nombre premier. Il est (entr\' autres) un multiple de '.$i;
                } 
            }
            return $nb.' est un nombre premier.';
        }

        echo estPremier(51).$brr;

        function estString($str) {

            if (count(str_split($str)) == preg_match_all('/[a-zA-Z]/',$str)) {
                return 'ne contient que des lettres.';
            }

            return 'ne contient pas que des lettres.';
        }

        $str = 'ijzjrkzlejrkzjrlkjr1zlkjrjr';
        echo 'La chaine "'.$str.'"'.$s.estString($str).$brr;

        function estArobase($str) {

            if (preg_match_all('/@/',$str) == 1) {
                return 'semble valide.';
            }

            return 'n\'est pas valide.';
        }

        $str = 'ijzjrkzlejrkzj@rlkjrzlkjr@jr';
        echo 'L\'adresse mail"'.$str.'"'.$s.estArobase($str).$brr;

        function estTel($str) {
            $reg1 = '/[0-9][0-9]-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]/';
            $reg2 = '/[0-9][0-9]\s[0-9][0-9]\s[0-9][0-9]\s[0-9][0-9]\s[0-9][0-9]/';

            if (preg_match($reg1,$str) || preg_match($reg2,$str)) {
                return 'semble valide.';
            }
            return 'n\'est pas valide.';
        }

        $str1 = '05 61 48 78 95';
        $str2 = '05-61-45-58-78';
        $str3 = '0561 45 78 98';
        $str4 = '05 61 04 3a 23';

        echo 'Le numéro "'.$str1.'"'.$s.estTel($str1).$brr;
        echo 'Le numéro "'.$str2.'"'.$s.estTel($str2).$brr;
        echo 'Le numéro "'.$str3.'"'.$s.estTel($str3).$brr;
        echo 'Le numéro "'.$str4.'"'.$s.estTel($str4).$brr;

        $notes = array(
            'Said' => 13,
            'Badr' => 16,
            'Najat' => 15
        );

        $notes['Karim'] = 10;        

        $notes['Badr'] = NULL;

        print_r($notes);

        echo    $brr.'La meilleure note est de :'.$s.max(array_diff($notes, array(null, 0))).$br.
                'La plus mauvaise note est de :'.$s.min(array_diff($notes, array(null, 0))).$brr;

        ksort($notes);
        print_r($notes);
        
        arsort($notes);

        echo $brr;
        print_r($notes);

        unset ($notes['Badr']);

        echo $brr.'La moyenne de la classe est de :'.$s.moyTab($notes).$brr;

        $mA = array (
            array(3,5,2),
            array(2,3,2),
            array(1,2,4)
        );

        $mB = array (
            array(3,7,2),
            array(4,3,6),
            array(8,11,9)
        );

        $mC = array (
            'Thierry' => array(3,3,1),
            'Luc-Pierre' => array(1,3,2),
            'Omar' => array(1,1,2)
        );

        function matrices($operation, ...$tab) {

            $tableau = [];
            $tableauTemp = [];

            //Mise en forme des tableaux en tableaux simples (Non asociatifs)
                //que l'on push dans un seul et unique tableau (tableauTemp) a trois dimensions :
                //[dim1 : Les tableaux donnés en arguments, formatés]
                //[dim2: Les tableaux matriciels]
                //[dim3 : Les valeurs])
            for ($j = 0; $j < (func_num_args() - 1); $j++) {

                $tabTemp = [];
                foreach ($tab[$j] as $t) {
                    array_push($tabTemp, $t);
                }
                array_push($tableauTemp, $tabTemp);
            }
            
            //On prépare le tableau résultat (rempli de 1 ou de 0 selon l'opération)
            for ($l = 0; $l < count($tableauTemp[0]); $l++) {
                for ($m = 0; $m < count($tableauTemp[0][$l]); $m++) {
                    switch ($operation) {
                        case 'x': 
                        case 'X':
                        case '*':
                            $tableau[$l][$m] = 1;
                            break;
                        case '+':
                            $tableau[$l][$m] = 0;
                            break;
                    }
                }
            }
            
            //On parcourt les tableaux temporaires (k) dans leurs deux dimensions (l & m) 
                //et on additionne/multiplie à la valeur en cour (tableau)
            for ($k = 0; $k < count($tableauTemp); $k++) {
                for ($l = 0; $l < count($tableauTemp[$k]); $l++) {
                    for ($m = 0; $m < count($tableauTemp[$k][$l]); $m++) {
                        switch ($operation) {
                            case 'x': 
                            case 'X':
                            case '*':
                                $tableau[$l][$m] = $tableau[$l][$m] * $tableauTemp[$k][$l][$m];
                                break;
                            case '+':
                                $tableau[$l][$m] = $tableau[$l][$m] + $tableauTemp[$k][$l][$m];
                                break;
                        }
                    }
                }
            }
            return $tableau;
        }
        var_dump(matrices('*',$mA, $mB, $mC));
        echo $brr;
    ?>


</body>

</html>