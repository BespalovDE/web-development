PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;
VAR
  S1: STRING;
FUNCTION GetQueryStringParameter(VAR Name: STRING): STRING;
VAR
 i: INTEGER;
 InStr, sNowString, sParameterValue: STRING;
BEGIN
  sParameterValue := '';
  sNowString := '';
  InStr := GetEnv('QUERY_STRING');
  WHILE InStr <> '' 
  DO
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
              sParameterValue := Copy(InStr, Length(sNowString) + 2, Length(InStr) - (Length(sNowString) + 1));
              InStr := ''
            END
          ELSE
            BEGIN
              sParameterValue := Copy(InStr, Length(sNowString) + 2, i - (Length(sNowString) + 2));
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
  GetQueryStringParameter := sParameterValue
END;

BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  S1 := 'first_name';
  WRITELN(OUTPUT, 'First Name: ', GetQueryStringParameter(S1));
  S1 := 'last_name';
  WRITELN(OUTPUT, 'Last Name: ', GetQueryStringParameter(S1));
  S1 := 'age';
  WRITELN(OUTPUT, 'Age: ', GetQueryStringParameter(S1))
END.
