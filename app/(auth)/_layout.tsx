import { useAuth } from "@/providers/AuthProviders";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout(){

    const {user}=useAuth();

    if(user){
        return <Redirect href= {'/(home)/(tabs)'} />
    }

    return <Stack/>;
}