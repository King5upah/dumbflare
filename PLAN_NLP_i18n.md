# Plan: Capa NLP Multilingüe

> Estado: EN PLANEACIÓN  
> Fecha: 2026-04-23

---

## Objetivo

Añadir detección de idioma y diálogos localizados a Dumbflare en al menos 5 idiomas, sin dependencias externas ni APIs de ML. La ilusión de "inteligencia" encaja con el tono del producto.

---

## Idiomas objetivo

| Locale | Idioma | Tono particular |
|---|---|---|
| `en` | English | Base actual — hostil, corporativo |
| `es` | Español | Igual de condescendiente pero con sabor local ("Nel pastel") |
| `fr` | Français | Condescendiente a la francesa, ligeramente existencialista |
| `de` | Deutsch | Burocrático, formal, aterrador en su precisión |
| `ja` | 日本語 | Excesivamente cortés y aterrador a la vez |

---

## Arquitectura propuesta

### Nuevos archivos

```
src/lib/
  NLPEngine.ts            — detección de idioma + routing de locale
  i18n/
    index.ts              — tipo Locale, barrel export
    en.ts                 — strings actuales migrados
    es.ts
    fr.ts
    de.ts
    ja.ts
```

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/lib/SassyEngine.ts` | Acepta `locale` como parámetro; delega strings a `i18n/` |
| `src/components/ChatInterface.tsx` | Carga script de personalidad según locale; `classifyIntent` por idioma |
| `src/components/StupidCaptcha.tsx` | Prop opcional `locale?: Locale`; pasa locale por contexto |
| `src/index.ts` | Exporta tipo `Locale` |

---

## Detalle por módulo

### `src/lib/NLPEngine.ts`

```ts
// Detecta idioma del browser o usa override manual
export const detectLocale = (override?: string): Locale => { ... }

// classifyIntent expandido por idioma
export const classifyIntent = (text: string, locale: Locale): Intent => { ... }
```

Patrones de intent por idioma:
- **es:** oui → yes; bien sûr, claro, sí, nel → no
- **fr:** oui, bien sûr → yes; non, jamais → no
- **de:** ja, natürlich → yes; nein, niemals → no
- **ja:** はい, そうです → yes; いいえ, 違います → no

### `src/lib/i18n/[locale].ts`

Cada archivo exporta un objeto con la misma forma que los strings actuales:
- `sassyResponses: Record<Category, Record<Mood, string[]>>`
- `chatScripts: Record<Mood, Script>`
- `uiStrings: Record<string, string>` — labels, placeholders, botones

Los strings **no son traducciones literales** — se reescriben en el tono del idioma. Ejemplos:

**Alemán (hostile/failure):**
> "Abgelehnt. Ihr Siliziumgehalt überschreitet den zulässigen Grenzwert."

**Japonés (bored/failure):**
> "失敗しました。予想通りです。次へ。"

**Francés (paranoid/gaslighting):**
> "Vous avez sélectionné ces cases avec une précision suspecte. Qui vous a briefé ?"

### `src/components/StupidCaptcha.tsx`

```tsx
// Nueva prop
interface StupidCaptchaProps {
  onVerified?: () => void;
  locale?: Locale; // si se omite, usa NLPEngine.detectLocale()
}
```

El locale se propaga via React Context para no hacer prop-drilling por todos los tasks.

---

## UI extra (opcional, bajo costo)

Mostrar en el header del chat el idioma detectado como dato de "inteligencia":

```
NLP Core v4.2 · Idioma detectado: Español · Confianza: 94.7%
```

---

## Lo que NO cambia

- La lógica de juego del DinoTask (canvas/RAF)
- El sistema de moods y categorías
- Las probabilidades de pass/fail
- El diseño visual

---

## Orden de implementación

1. Crear `src/lib/i18n/index.ts` con el tipo `Locale` y el barrel
2. Migrar strings actuales a `src/lib/i18n/en.ts`
3. Crear `src/lib/NLPEngine.ts` con detección + `classifyIntent` multilingüe
4. Escribir `es.ts`, `fr.ts`, `de.ts`, `ja.ts`
5. Refactorizar `SassyEngine.ts` para consumir i18n
6. Actualizar `ChatInterface.tsx` para locale-aware scripts
7. Añadir prop `locale` a `StupidCaptcha.tsx` + Context
8. Exportar `Locale` desde `src/index.ts`
