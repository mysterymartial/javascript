ORG 100h ; Origin, start at address 100h
MOV AX, 0 ; Clear AX register
MOV BX, 0 ; Clear BX register
MOV CX, 0 ; Clear CX register
MOV DX, 0 ; Clear DX register
; Input two numbers
IN AL, 60h ; Assume input from port 60h
MOV AH, AL ; Move first input to AH
IN AL, 60h ; Assume input from port 60h
MOV BH, AL ; Move second input to BH
OUT BH