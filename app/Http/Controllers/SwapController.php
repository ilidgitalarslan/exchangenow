<?php

namespace App\Http\Controllers;

class SwapController extends Controller
{
    /**
     * Show the swap view
     *
     * @return \Illuminate\View\View
     */
    public function show()
    {
        $data = config('swap.options');

        $url = $data['source'] . http_build_query( $data );

        return view('swap.show', [
            'url' => $url
        ]);
    }
}
