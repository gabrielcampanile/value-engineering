'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Location from '../components/Location'

export default function Contato() {
  const [formType, setFormType] = useState('message')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log('Formulário enviado')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
          <p className="mb-2">
            <strong>Endereço:</strong> Rua Exemplo, 123 - Cidade, Estado - CEP: 00000-000
          </p>
          <p className="mb-2">
            <strong>Telefone:</strong> (00) 0000-0000
          </p>
          <p className="mb-2">
            <strong>E-mail:</strong> contato@valueengenharia.com
          </p>
          <p className="mb-4">
            <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h
          </p>
          <div className="mt-8">
            <Location />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Envie uma Mensagem ou Agende uma Reunião</h2>
          <RadioGroup defaultValue="message" className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="message" id="message" onClick={() => setFormType('message')} />
              <Label htmlFor="message">Enviar Mensagem</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="meeting" id="meeting" onClick={() => setFormType('meeting')} />
              <Label htmlFor="meeting">Agendar Reunião</Label>
            </div>
          </RadioGroup>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" />
            </div>
            {formType === 'meeting' && (
              <div>
                <Label htmlFor="date">Data Preferida</Label>
                <Input id="date" type="date" required />
              </div>
            )}
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" required />
            </div>
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

