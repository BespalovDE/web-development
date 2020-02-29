PROGRAM PaulRevere(INPUT, OUTPUT);
{ѕечать соответствующего сообщени€, завис€щего от величины на входе:  '...by land'  дл€ 1;  '...by sea'  дл€ 2; иначе сообщать сколько}
USES
  DOS;
VAR
  Lanterns: CHAR;
  ItogLanterns, S1, S2: STRING;
FUNCTION TakeParam(VAR InStr, Name: STRING): STRING;
VAR
 i: INTEGER;
 sNowString, ItogLanterns: STRING;
BEGIN
  ItogLanterns := '';
  sNowString := '';
  WHILE InStr <> '' DO
  BEGIN
    i := Pos('=', InStr);
    sNowString := Copy(InStr, 1, i - 1);
    IF Name = sNowString 
    THEN
      BEGIN
        i := Pos('&', InStr);
        IF i = 0 
        THEN
          BEGIN
            ItogLanterns := Copy(InStr, Length(sNowString) + 2, Length(InStr) - (Length(sNowString) + 1));
            InStr := ''
          END
        ELSE
          BEGIN
            ItogLanterns := Copy(InStr, Length(sNowString) + 2, i - (Length(sNowString) + 2));
            Break
          END
      END;
    i := Pos('&', InStr);
    IF (InStr <> '') AND (i <> 0) 
    THEN
      InStr := Copy(InStr, i + 1, Length(InStr) - i);
    IF i = 0 
    THEN
      InStr := ''
  END;
  TakeParam := ItogLanterns
END;
BEGIN {PaulRevere}
  {Read Lanterns}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  S1 := GetEnv('QUERY_STRING');
  S2 := 'Lanterns';
  ItogLanterns := TakeParam(S1, S2);
  IF Length(ItogLanterns) > 0
  THEN
    BEGIN
      Lanterns := ItogLanterns[1];
      {Issue Paul Revere's message}
      IF Lanterns > '0'
      THEN
        IF Lanterns < '3'
        THEN
          WRITE('British are coming by ');
      IF Lanterns = '1'
      THEN
          WRITE('land')
      ELSE
        IF Lanterns = '2'
        THEN
          WRITE('sea')
        ELSE
          WRITE('The North Church shows only ''', Lanterns, '''');
    END
    ELSE
      WRITE('No Lanterns');
  WRITELN('.')
END. {PaulRevere}
