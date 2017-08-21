package com.giftbit.ruleslib

import com.giftbit.ruleslib.functions.Function

interface Context {

    Function getFunction(String name)

    Value getValue(String identifier)

}
