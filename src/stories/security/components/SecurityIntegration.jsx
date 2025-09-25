import React, { useEffect, useState } from 'react';

// Simulação do cliente de segurança
const mockSecurityClient = {
    login: async (credentials) => {
        // Simular delay de rede
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (credentials.username === 'admin' && credentials.password === 'admin123') {
            return {
                success: true,
                accessToken: 'mock-jwt-token',
                refreshToken: 'mock-refresh-token',
                user: {
                    id: '1',
                    username: 'admin',
                    email: 'admin@systentando.com',
                    roles: [
                        { name: 'system', permissions: ['*'] }
                    ],
                    permissions: ['*']
                }
            };
        } else if (credentials.username === 'user' && credentials.password === 'user123') {
            return {
                success: true,
                accessToken: 'mock-jwt-token-user',
                refreshToken: 'mock-refresh-token-user',
                user: {
                    id: '2',
                    username: 'user',
                    email: 'user@systentando.com',
                    roles: [
                        { name: 'cliente', permissions: ['read:profile', 'update:profile'] }
                    ],
                    permissions: ['read:profile', 'update:profile']
                }
            };
        } else {
            throw new Error('Credenciais inválidas');
        }
    },

    logout: async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true };
    },

    validateToken: async (token) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return {
            id: '1',
            username: 'admin',
            email: 'admin@systentando.com',
            roles: [{ name: 'system', permissions: ['*'] }],
            permissions: ['*']
        };
    }
};

export const SecurityIntegration = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await mockSecurityClient.login(credentials);
            if (result.success) {
                setUser(result.user);
                localStorage.setItem('auth_token', result.accessToken);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await mockSecurityClient.logout();
            setUser(null);
            localStorage.removeItem('auth_token');
        } catch (err) {
            console.error('Erro no logout:', err);
        } finally {
            setLoading(false);
        }
    };

    const checkAuth = async () => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            try {
                const userData = await mockSecurityClient.validateToken(token);
                setUser(userData);
            } catch (err) {
                localStorage.removeItem('auth_token');
            }
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    if (user) {
        return (
            <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{
                    background: '#e8f5e8',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    border: '1px solid #4caf50'
                }}>
                    <h3>✅ Usuário Autenticado</h3>
                    <p><strong>Nome:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Roles:</strong> {user.roles.map(role => role.name).join(', ')}</p>
                    <p><strong>Permissões:</strong> {user.permissions.join(', ')}</p>
                </div>

                <div style={{
                    background: '#f0f8ff',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    border: '1px solid #2196f3'
                }}>
                    <h4>🔐 Recursos Protegidos</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <button
                            style={{
                                padding: '0.5rem',
                                background: '#4caf50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            onClick={() => alert('Acesso ao perfil permitido!')}
                        >
                            Ver Perfil
                        </button>
                        <button
                            style={{
                                padding: '0.5rem',
                                background: user.permissions.includes('*') || user.permissions.includes('admin:*') ? '#4caf50' : '#ccc',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: user.permissions.includes('*') || user.permissions.includes('admin:*') ? 'pointer' : 'not-allowed'
                            }}
                            onClick={() => {
                                if (user.permissions.includes('*') || user.permissions.includes('admin:*')) {
                                    alert('Acesso administrativo permitido!');
                                } else {
                                    alert('Acesso negado! Permissão insuficiente.');
                                }
                            }}
                        >
                            Painel Admin
                        </button>
                        <button
                            style={{
                                padding: '0.5rem',
                                background: '#2196f3',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            onClick={() => alert('Configurações acessadas!')}
                        >
                            Configurações
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    disabled={loading}
                    style={{
                        padding: '0.75rem 1.5rem',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        opacity: loading ? 0.6 : 1
                    }}
                >
                    {loading ? 'Saindo...' : 'Logout'}
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
                background: '#f8f9fa',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #ddd'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    🔐 Sistema de Autenticação
                </h2>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                            Username:
                        </label>
                        <input
                            type="text"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            placeholder="Digite seu username"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '1rem'
                            }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                            Password:
                        </label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            placeholder="Digite sua senha"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '1rem'
                            }}
                            required
                        />
                    </div>

                    {error && (
                        <div style={{
                            background: '#f8d7da',
                            color: '#721c24',
                            padding: '0.75rem',
                            borderRadius: '4px',
                            marginBottom: '1rem',
                            border: '1px solid #f5c6cb'
                        }}>
                            ❌ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: loading ? '#ccc' : '#4caf50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.6 : 1
                        }}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <div style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    background: '#e3f2fd',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                }}>
                    <h4>🧪 Credenciais de Teste:</h4>
                    <p><strong>Admin:</strong> username: admin, password: admin123</p>
                    <p><strong>Usuário:</strong> username: user, password: user123</p>
                </div>
            </div>
        </div>
    );
};

export default SecurityIntegration;
