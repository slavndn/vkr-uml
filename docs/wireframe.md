# Wireframe / прототип интерфейса (Mermaid)

Ниже — прототип ключевых экранов для работы с системой учета спортивных достижений.
Схема показывает основные переходы между экранами и ключевые действия пользователя.

```mermaid
flowchart TB
A["Login screen"] -->|success| B{"Role"}
A -->|error| A

B -->|Student| S1["Student dashboard"]
S1 --> S2["Student profile"]
S1 --> S3["Achievements list"]
S3 --> S4["Achievement details"]
S1 --> S5["Statistics"]

B -->|Teacher| T1["Teacher dashboard"]
T1 --> T2["Classes"]
T2 --> T3["Class students"]
T3 --> T4["Student view (teacher)"]
T4 --> T5["Add achievement form"]
T4 --> T6["Review submitted records"]
T1 --> T7["Reports export"]
```

## Комментарии к прототипу
- **Ролевая главная страница**: после входа пользователь попадает на дашборд, зависящий от роли (ученик/учитель).
- **Форма внесения достижения (учитель)**: ключевой экран для фиксации результата; после сохранения запись может получить статус `SUBMITTED`.
- **Подтверждение записей**: учитель может массово подтверждать/отклонять результаты, влияя на статус записи.
- **Отчеты**: формирование отчета по периоду с выбором класса/ученика и экспортом.

Краткое соответствие экранов (RU → diagram):
- Login screen = Экран входа (выбор режима/вход)
- Student dashboard = Главная ученика (статистика, последние достижения)
- Student profile = Профиль ученика
- Achievements list = Список достижений
- Achievement details = Карточка достижения
- Statistics = Статистика
- Teacher dashboard = Главная учителя
- Classes = Классы
- Class students = Список учеников класса
- Student view (teacher) = Профиль ученика для учителя
- Add achievement form = Форма «Внести достижение»
- Review submitted records = Подтверждение записей
- Reports export = Отчеты / экспорт

