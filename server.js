import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios/', async (req, res) => {
    let users = []
    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        })
    } else {
        users = await prisma.user.findMany()
    }
    res.status(200).json(users)
})


app.post('/usuarios/', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).send('Usuario Criado')
})

app.put('/usuarios/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).send('Usuario Atualizado')
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ Mensagem: "Usuario deletado com sucesso" })
})

app.listen(3000, () => {
    console.log('Servidor Rodando em http://localhost:3000/')
})
