USE [BDFarmacia]
GO
/****** Object:  StoredProcedure [dbo].[uspFiltrarLaboratorio]    Script Date: 19/2/2025 11:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[uspFiltrarSucursal]
@nombre varchar(100),
@direccion varchar(100)
as
begin

declare @sql NVARCHAR(400)

SET @sql= 'select IIDSUCURSAL,NOMBRE,DIRECCION
from Sucursal
where BHABILITADO=1'

IF @nombre!=''
    SET @sql=@sql+ ' AND NOMBRE LIKE ''%'+@nombre+'%'''
IF @direccion!=''
    SET @sql=@sql+ ' AND DIRECCION LIKE ''%'+@direccion+'%'''

EXECUTE SP_EXECUTESQL @sql

end