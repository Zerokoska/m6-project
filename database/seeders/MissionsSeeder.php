<?php

namespace Database\Seeders;

use App\Models\Mission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $missions = [
            [
                'name' => 'Dr. No',
                'year' => 1962
            ],
            [
                'name' => 'From Russia with Love',
                'year' => 1963
            ],
            [
                'name' => 'Goldfinger',
                'year' => 1964
            ],
            [
                'name' => 'Thunderball',
                'year' => 1965
            ],
            [
                'name' => 'You Only Live Twice',
                'year' => 1967
            ],
            [
                'name' => 'On Her Majesty\'s Secret Service',
                'year' => 1969
            ],
            [
                'name' => 'Diamonds Are Forever',
                'year' => 1971
            ],
            [
                'name' => 'Live and Let Die',
                'year' => 1973
            ],
            [
                'name' => 'The Man with the Golden Gun',
                'year' => 1974
            ],
            [
                'name' => 'The Spy Who Loved Me',
                'year' => 1977
            ],
            [
                'name' => 'Moonraker',
                'year' => 1979
            ],
            [
                'name' => 'For Your Eyes Only',
                'year' => 1981
            ],
            [
                'name' => 'Octopussy',
                'year' => 1983
            ],
            [
                'name' => 'A View to a Kill',
                'year' => 1985
            ],
            [
                'name' => 'The Living Daylights',
                'year' => 1987
            ],
            [
                'name' => 'Licence to Kill',
                'year' => 1989
            ],
            [
                'name' => 'GoldenEye',
                'year' => 1995
            ],
            [
                'name' => 'Tomorrow Never Dies',
                'year' => 1997
            ],
            [
                'name' => 'The World Is Not Enough',
                'year' => 1999
            ],
            [
                'name' => 'Die Another Day',
                'year' => 2002
            ],
            [
                'name' => 'Casino Royale',
                'year' => 2006
            ],
            [
                'name' => 'Quantum of Solace',
                'year' => 2008
            ],
            [
                'name' => 'Skyfall',
                'year' => 2012
            ],
            [
                'name' => 'Spectre',
                'year' => 2015
            ],
            [
                'name' => 'No Time to Die',
                'year' => 2020
            ]
        ];

        foreach($missions as $mission){
           Mission::insert([
            'name' => $mission['name'],
            'year' => $mission['year'],
        ]);;
        }
        
    }
}
