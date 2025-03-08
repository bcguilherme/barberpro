'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../auth-context'
import { useLanguage } from '@/context/LanguageContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Camera, Save, Check } from 'lucide-react'

interface UserProfile {
  name: string
  email: string
  role: string
  createdAt: string
}

export default function ProfilePage() {
  const { currentUser } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserProfile() {
      if (!currentUser) return

      try {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
        
        if (userDoc.exists()) {
          setProfile(userDoc.data() as UserProfile)
        } else {
          // Se não existir um perfil no Firestore, crie um básico com o e-mail
          setProfile({
            name: currentUser.displayName || 'Usuário',
            email: currentUser.email || '',
            role: 'user',
            createdAt: new Date().toISOString()
          })
        }
      } catch (error) {
        console.error('Erro ao carregar perfil:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUserProfile()
  }, [currentUser])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 self-center">
            <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              {currentUser?.photoURL ? (
                <img 
                  src={currentUser.photoURL} 
                  alt="Foto de perfil" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-bold text-purple-600">
                  {profile?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{profile?.name}</h2>
              <p className="text-gray-500">{profile?.email}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Tipo de conta</h3>
                <p className="mt-1 text-gray-900">
                  {profile?.role === 'admin' ? 'Administrador' : 'Usuário'}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Membro desde</h3>
                <p className="mt-1 text-gray-900">
                  {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString('pt-BR') : 'N/A'}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Editar perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 