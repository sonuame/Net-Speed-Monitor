
CREATE TABLE [dbo].[NetSpeedLogs](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[Server] [varchar](50) NOT NULL,
	[ServerIP] [nchar](10) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[Download] [decimal](18, 2) NOT NULL,
	[Upload] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_NetSpeedLogs] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO