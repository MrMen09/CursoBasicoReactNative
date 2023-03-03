import React from "react";
import { TextInput, Button, Text, View, ViewComponent } from "react-native";

export default function LoginForm() { 
    return (
        <View>
            <Text>Bienvenido!</Text>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button title="Enviar" onPress={() => console.log("Enviado")}></Button>
        </View>
    );
    
}